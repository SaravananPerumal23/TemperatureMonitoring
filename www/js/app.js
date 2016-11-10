// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicCharts' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicCharts', ['ionic', 'chart.js', 'ti-segmented-control', 'angular.filter'])//'ngMockE2E',

.constant('ApiEndpoint', {
  url: 'https://www.bn-access.com/api'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('SensorPointDetails', function(){
  var sensorPointData = {
       SensorPointID: ''
   };
   return {
       getSensorPointID: function () {
           return sensorPointData.SensorPointID;
       },
       setSensorPointID: function (sensorPointId) {
           sensorPointData.SensorPointID = sensorPointId;
       }
   };
 })

 .factory('sessionToken', function(){
   var sessionToken = {
        sessionTokenID: ''
    };

    return {
        getSessionTokenID: function () {
            return sessionToken.sessionTokenID;
        },
        setSessionTokenID: function (sessionTokenID) {
            sessionToken.sessionTokenID = sessionTokenID;
        }
    };
  })

 .factory('dataFactory', ['$http', function($http) {
    var dataFactory = {};
    dataFactory.getDigiResponse = function (endpointUrl, inputParam) {
      alert(endpointUrl);
      alert(inputParam);
      var apiRequest = { method: 'POST',
                           crossDomain: true,
                           url: ApiEndpoint.url + endpointUrl,
                           headers: {
                             'Content-Type': 'application/json'
                           },
                           data: { AccountID: 4761 }
                          }
      return  $http(apiRequest);
        // .then(function(loginResponse){
        //   alert('result' + loginResponse.data);
        //   return loginResponse.data;
        // }, function(err){return null})
    };
    return dataFactory;
 }])

.config(function ($stateProvider, $urlRouterProvider) {
  // $httpProvider.defaults.useXDomain = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'app/Login/Login.html',
    controller: 'LoginController'
  })
  .state('main', {
    url: '/',
    abstract: true,
    templateUrl: 'Dashboard/Main.html'
  })
  .state('main.dash', {
    url: 'main/dash',
    views: {
        'dash-tab': {
          templateUrl: 'app/Dashboard/Dashboard.html',
          controller: 'DashboardController'
        }
    }
  })
  .state('main.sensorPoint', {
    url: 'main/sensorPoint',
    views: {
        'dash-tab': {
          templateUrl: 'app/Dashboard/SensorPointTempHistory.html',
          controller: 'SensorPointTempHistoryController'
        }
    }
  })
  .state('main.public', {
    url: 'main/public',
    views: {
        'public-tab': {
          templateUrl: 'Dashboard/Public.html'
        }
    }
  })
  .state('main.admin', {
    url: 'main/admin',
    views: {
        'admin-tab': {
          templateUrl: 'Dashboard/admin.html'
        }
    },
  });

$urlRouterProvider.otherwise('/login');
})

 .run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

    if ('data' in next && 'authorizedRoles' in next.data) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        $state.go($state.current, {}, {reload: true});
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      }
    }

    if (!AuthService.isAuthenticated()) {
      if (next.name !== 'login') {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
})
