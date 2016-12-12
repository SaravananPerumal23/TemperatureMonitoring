angular.module('temperatureMonitoring', ['ionic', 'chart.js', 'ti-segmented-control', 'angular.filter'])
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
        SensorPointID: '',
        SensorPointDesc: ''
   };
   return {
       getSensorPointID: function () {
           return sensorPointData;
       },
       setSensorPointID: function (sensorPointId, sensorPointDesc) {
           sensorPointData.SensorPointID = sensorPointId;
           sensorPointData.SensorPointDesc = sensorPointDesc;
       }
   };
 })

 .factory('ItemInfo', function(){
   var itemData = {
         itemID: '',
         itemDesc: '',
         itemQuantity: ''
    };
    return {
        getItemInfo: function () {
            return itemData;
        },
        setItemInfo: function (itemID, itemDesc, itemQuantity) {
            itemData.itemID = itemID;
            itemData.itemDesc = itemDesc;
            itemData.itemQuantity = itemQuantity;
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

 .factory('dataFactory', ['$http', 'ApiEndpoint', 'sessionToken', function($http, ApiEndpoint, sessionToken) {
    var dataFactory = {};
    dataFactory.getDigiResponse = function (endpointUrl, inputParam) {
      var apiRequest = { method: 'POST',
                           crossDomain: true,
                           url: ApiEndpoint.url + endpointUrl,
                           headers: {
                             'Content-Type': 'application/json',
                             'Authorization': 'Basic ' + sessionToken.sessionTokenID
                           },
                           data: inputParam
                          }
      return  $http(apiRequest);
    };
    return dataFactory;
 }])

.config(function ($stateProvider, $urlRouterProvider) {
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
  .state('main.action', {
    url: 'main/action',
    views: {
        'dash-tab': {
          templateUrl: 'app/Dashboard/ActionableTask.html',
          controller: 'ActionableTaskController'
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

 .run(function ($rootScope, $state, LoginService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

    if ('data' in next && 'authorizedRoles' in next.data) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!LoginService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        $state.go($state.current, {}, {reload: true});
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      }
    }

    if (!LoginService.isAuthenticated()) {
      if (next.name !== 'login') {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
})
