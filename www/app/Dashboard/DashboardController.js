angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, AuthService) {

  $scope.getArrayList = function(data, fieldField, filterBy){
    console.log('Input Params: '+ fieldField + ',' + filterBy);
    var arr = [];
    angular.forEach(data, function(filterObj , filterIndex)
    {
      angular.forEach(filterObj, function(value , key)
      {
        if(key == "ParentID" && value == filterBy)
        {
          angular.forEach(filterObj, function(value , key)
          {
            if(key == fieldField)
            {
              console.log(value);
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

  $http.get('http://localhost:8888/api/AccountUnitItems/read/')
  .then(function(unitResponse){
      $scope.unitReponseData = unitResponse.data.UnitItem;
  	}, function(err){
  		console.error('ERR', err);
  	})

  $http.get('http://localhost:8888/api/AccountSPointItems/read')
    .then(function(sensorPointResponse){
        $scope.sensorPointResponseData = sensorPointResponse.data.SPointItem;
      }, function(err){
        console.error('ERR', err);
        $scope.sensorPointResponseData = 'ERERE';
      })

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  // $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  // $scope.series = ['Series A', 'Series B'];
  // $scope.data = [
  //     [65, 59, 80, 81, 56, 55, 40],
  //     [28, 48, 40, 19, 86, 27, 90]
  // ];



  // $scope.labels = ["DeviceID", "February", "March", "April", "May", "June", "July"];
  $scope.labels = ['60001', '60002'];
   $scope.series = ['Series A', 'Series B'];
   $scope.data = [[15, 18],
   [18, 20],];
  // $scope.data = [
  //     [65, 59, 80, 81, 56, 55, 40],
  //     [28, 48, 40, 19, 86, 27, 90]
  // ];
});
