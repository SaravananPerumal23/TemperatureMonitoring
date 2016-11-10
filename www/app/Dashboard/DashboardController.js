angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, $ionicPopup, SensorPointDetails, dataFactory, ApiEndpoint, sessionToken, AuthService, TEMPERATURE_CUTOFF) {

$scope.TEMPERATURE_CUTOFF = TEMPERATURE_CUTOFF;
$scope.chartOptions = {
  elements: {
    line: {
    //borderWidth: 0.5,
    tension: 0.4,
    fill: false
    }
  },
  responsive: true,
  borderWidth: 1,
  scaleLineWidth : 1,
  responsive: false,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
          min: 0
      }
    }]
  }
};

var unitItemsRequest = { method: 'POST',
                     crossDomain: true,
                     url: ApiEndpoint.url + '/AccountUnitItems/read/',
                     headers: {
                       'Content-Type': 'application/json',
                       'Authorization': 'Basic ' + sessionToken.sessionTokenID
                     },
                     data: { 'AccountID': 4761 }
                    }
$http(unitItemsRequest)
.then(function(unitItemsResponse){
  $scope.unitReponseData = unitItemsResponse.data;
}, function(err){
})

var spointItemsRequest = { method: 'POST',
                     crossDomain: true,
                     url: ApiEndpoint.url + '/AccountSPointItems/read/',
                     headers: {
                       'Content-Type': 'application/json',
                       'Authorization': 'Basic ' + sessionToken.sessionTokenID
                     },
                     data: { 'AccountID': 4761 }
                    }
$http(spointItemsRequest)
.then(function(spointItemsResponse){
  $scope.sensorPointResponseData = spointItemsResponse.data;
}, function(err){
})

$scope.logout = function() {
  AuthService.logout();
  $state.go('login');
};

$scope.onClick = function(sensorPointId, evt) {
  SensorPointDetails.setSensorPointID(sensorPointId);
  $state.go('main.sensorPoint');
};
});
