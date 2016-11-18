angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, $ionicPopup, SensorPointDetails, dataFactory, ApiEndpoint, sessionToken, LoginService, TEMPERATURE_CUTOFF) {

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

var inputParam = '{ AccountID: 4761 }';
dataFactory.getDigiResponse('/AccountUnitItems/read/', inputParam)
.then(function(unitItemsResponse){
  $scope.unitReponseData = unitItemsResponse.data;
}, function(err){
});

dataFactory.getDigiResponse('/AccountSPointItems/read/', inputParam)
.then(function(spointItemsResponse){
  $scope.sensorPointResponseData = spointItemsResponse.data;
}, function(err){
});

$scope.logout = function() {
  LoginService.logout();
  $state.go('login');
};

$scope.onClick = function(sensorPointId, sensorPointDesc, evt) {
  SensorPointDetails.setSensorPointID(sensorPointId, sensorPointDesc);
  $state.go('main.sensorPoint');
};
});
