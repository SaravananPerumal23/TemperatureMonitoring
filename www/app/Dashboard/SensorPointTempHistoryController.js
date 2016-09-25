angular.module('ionicCharts')

.controller("SensorPointTempHistoryController", function($scope, $http, $state, AuthService, SensorPointDetails) {

  $scope.logout = function() {
    AuthService.logout();
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

// $scope.chartData = [-5, -6, 0, -4, -3, -5.2, -5, -1.7, -1, 0, -0.4, -2, -2, -5, 4, -2, -4, -1, -1, 2, 4, -1, 1, 1, 4, 0, -1, 1, -2, 5.7, 5];
// $scope.chartLabel = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131];

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
    maintainAspectRatio: false,
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

  $scope.getTempHistory = function() {
    $http.get('http://localhost:8888/api/SPointTempHist/read')
    .then(function(temperatureHistoryResp){
      var temperatureHistoryResponseData = temperatureHistoryResp.data.SPointTempHistItem;
      $scope.showChart = true;
      $scope.chartData = getArrayList(temperatureHistoryResponseData, 'TempC', SensorPointDetails.getSensorPointID());
      $scope.chartLabel = getArrayList(temperatureHistoryResponseData, 'UTC', SensorPointDetails.getSensorPointID());
    }, function(err){
    })
  };
});
