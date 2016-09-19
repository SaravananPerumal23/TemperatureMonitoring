angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, $ionicPopup, AuthService) {

$scope.getArrayList = _.memoize(function(data, fieldField, filterBy){
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
});

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
