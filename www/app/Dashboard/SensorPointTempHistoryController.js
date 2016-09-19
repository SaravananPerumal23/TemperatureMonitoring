angular.module('ionicCharts')

.controller("SensorPointTempHistoryController", function($scope, $http, $state, AuthService) {

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  $scope.back = function() {
    $state.go('main.dash');
  };

  $scope.getTempHistory = function() {
    $http.get('http://localhost:8888/api/SPointTempHist/read')
    .then(function(temperatureHistoryResp){
      $scope.temperatureHistoryResponseData = temperatureHistoryResp.data.SPointTempHistItem;
    }, function(err){
    })
  };

  $scope.getArrayList = _.memoize(function(data, fieldField, filterBy){
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
  });

});
