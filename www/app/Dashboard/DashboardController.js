angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, $ionicPopup, AuthService, TEMPERATURE_CUTOFF) {

$scope.testData = [15, 5, 10, -5, 2, 18, 23];
$scope.testLabels = [6001, 6002, 6003, 6004, 6005, 6006, 6007];

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

$scope.getArrayList = //_.memoize(
  function(data, fieldField, filterBy){
  var arr = [];
  angular.forEach(data, function(filterObj , filterIndex){
    angular.forEach(filterObj, function(value , key){
      if(key == "ParentID" && value == filterBy){
        angular.forEach(filterObj, function(value , key){
          if(key == fieldField){
            arr.push(value);
            return;
          }
        });
        return;
      }
    })
  });
  return arr;
}
//);

$http.get('http://localhost:8888/api/AccountUnitItems/read/')
.then(function(unitResponse){
  $scope.unitReponseData = unitResponse.data.UnitItem;
}, function(err){
})

$http.get('http://localhost:8888/api/AccountSPointItems/read')
.then(function(sensorPointResponse){
  $scope.sensorPointResponseData = sensorPointResponse.data.SPointItem;
}, function(err){
})

$scope.logout = function() {
  AuthService.logout();
  $state.go('login');
};

$scope.onClick = function(points, evt) {
  $state.go('main.sensorPoint');
};
});
