angular.module('ionicCharts')

.controller("ActionableTaskController", function($scope, $http, $state,
  $filter, ApiEndpoint, dataFactory, sessionToken, LoginService,
  SensorPointDetails, JsonData) {

$scope.working = false;
$scope.dpciDetails = JsonData.UnitItems;

$scope.logout = function() {
  LoginService.logout();
  $state.go('login');
};

$scope.back = function() {
  $scope.showChart = false;
  delete $scope.chartData;
  delete $scope.chartLabel;
  $state.go('main.sensorPoint');
};

$scope.$watch(function () {
  $scope.sensorPointID = SensorPointDetails.getSensorPointID().SensorPointID;
  $scope.sensorPointDesc = SensorPointDetails.getSensorPointID().SensorPointDesc;
});
});
