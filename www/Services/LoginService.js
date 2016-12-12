angular.module('temperatureMonitoring')

.service('LoginService', function($q, $http, ApiEndpoint, sessionToken, USER_ROLES) {
  var LOCAL_TOKEN_KEY = '';
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var authToken;

  function loadUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }

  function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }

  function useCredentials(token) {
    username = token.split('.')[0];
    isAuthenticated = true;
    authToken = token;

    if (username == 'admin') {
      role = USER_ROLES.admin
    }
    if (username == 'digiuser') {
      role = USER_ROLES.public
    }

    // Set the token as header for your requests!
    $http.defaults.headers.common['X-Auth-Token'] = token;
  }

  function destroyUserCredentials() {
    authToken = undefined;
    isAuthenticated = false;
    $http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

  var login = function(name, pw) {
    return $q(function(resolve, reject) {

      var loginRequest = { method: 'POST',
                           crossDomain: true,
                           url: ApiEndpoint.url + '/Login/create/',
                           headers: {
                             'Content-Type': 'application/json'
                           },
                           data: { 'UserName': name, 'Password': pw }
                          }
      $http(loginRequest)
      .then(function(loginResponse){
        sessionToken.sessionTokenID = loginResponse.data.SessionToken;
        storeUserCredentials(loginResponse.data.SessionToken);
        resolve('Login success.');
      }, function(err){
        reject('Login Failed.');
      })



      // if ((name == 'admin' && pw == '1') || (name == 'digiuser' && pw == 'digiuser')) {
      //   // Make a request and receive your auth token from your server
      //   storeUserCredentials(name + '.yourServerToken');
      //   resolve('Login success.');
      // } else {
      //   reject('Login Failed.');
      // }
    });
  };

  var logout = function() {
    destroyUserCredentials();
  };

  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };

  loadUserCredentials();

  return {
    login: login,
    logout: logout,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    username: function() {return username;},
    role: function() {return role;}
  };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})

.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});
