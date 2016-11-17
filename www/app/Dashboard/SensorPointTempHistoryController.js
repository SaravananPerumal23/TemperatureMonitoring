angular.module('ionicCharts')

.controller("SensorPointTempHistoryController", function($scope, $http, $state,
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
  $state.go('main.dash');
};

$scope.$watch(function () {
  $scope.sensorPointID = SensorPointDetails.getSensorPointID();
});

// var myInit = function () {
//     $scope.buttonClicked(0);
// };
// angular.element(document).ready(myInit);

$scope.chartOptions = {
  elements: {
    line: {
    //borderWidth: 0.5,
    tension: 0,
    fill: false
    }
  },
  responsive: true,
  borderWidth: 1,
  scaleLineWidth : 1,
  responsive: false,
  maintainAspectRatio: true,
  scales: {
    yAxes: [{
      ticks: {

      }
    }]
  }
};

function getArrayList(data, fieldField, filterBy){
var arr = [];
angular.forEach(data, function(filterObj , filterIndex){
  angular.forEach(filterObj, function(value , key){
    if(key == "SPointID" && value == filterBy){
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
};


// $scope.getTempHistory = function() {
//   $http.get('http://localhost:8888/api/SPointTempHist/read')
//   .then(function(temperatureHistoryResp){
//     var temperatureHistoryResponseData = temperatureHistoryResp.data.SPointTempHistItem;
//     $scope.showChart = true;
//     $scope.chartData = getArrayList(temperatureHistoryResponseData, 'TempC', SensorPointDetails.getSensorPointID());
//     $scope.chartLabel = getArrayList(temperatureHistoryResponseData, 'UTC', SensorPointDetails.getSensorPointID());
//   }, function(err){
//   })
// };


$scope.getChart = function() {
  var inputParam = '{ SPointID: ' + SensorPointDetails.getSensorPointID() + ', FromUTC: "' + $scope.previousDate + '", ToUTC: "'+ $scope.todaysDate + '"}';
  dataFactory.getDigiResponse('/SPointTempHist/read/', inputParam)
  .then(function(tempHistoryResponse){
    var tempHistoryResponseData = tempHistoryResponse.data.SPointTempHistItems;
    $scope.showChart = true;
    $scope.chartData = getArrayList(tempHistoryResponseData, 'TempC', SensorPointDetails.getSensorPointID());
    $scope.chartLabel = getArrayList(tempHistoryResponseData, 'UTC', SensorPointDetails.getSensorPointID());
  }, function(err){
  });
}

//$scope.getDatetime = new Date('2016-11-07 00:00:00');
var noOfDays = 0;
// $scope.getDatetime =  new Date().setDate(new Date().getDate() - noOfDays);

$scope.buttonClicked = function(index) {
  switch (index) {
    case 0:
      noOfDays = 1;
      break;
    case 1:
      noOfDays = 2;
      break;
    case 2:
      noOfDays = 7;
      break;
    default:
      noOfDays = 1;
  }
  $scope.todaysDate = $filter('date')(new Date().setDate(new Date().getDate()), "yyyy-MM-ddT00:00:00");
  $scope.previousDate = $filter('date')(new Date().setDate(new Date().getDate() - noOfDays), "yyyy-MM-ddT00:00:00");
  $scope.getChart();
}
$scope.buttonClicked(0);
});
