angular.module('temperatureMonitoring')

.controller("ActionableTaskController", function($scope, $http, $state,
  $filter, ApiEndpoint, dataFactory, sessionToken, LoginService,
  SensorPointDetails, ItemInfo, JsonData) {

$scope.working = false;

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
  $scope.itemID = ItemInfo.getItemInfo().itemID;
  $scope.itemDesc = ItemInfo.getItemInfo().itemDesc;
  $scope.itemQuantity = ItemInfo.getItemInfo().itemQuantity;
});

});
