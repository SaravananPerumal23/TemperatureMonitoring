angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, AuthService) {

  // $scope.url = "http://localhost:8888/api/AccountUnitItems/read/";
  //     $http({
  //         method: 'jsonp',
  //         url: $scope.url,
  //         params: {
  //             format: 'jsonp',
  //             callback: 'JSON_CALLBACK'
  //         }
  //     }).then(function (resp) {
  //         $scope.responseData = resp.data.UnitItem.UnitID;
  //     });

  $http.get('http://localhost:8888/api/AccountUnitItems/read/')
  .then(function(unitResponse){
  		console.log('Success', unitResponse); // JSON object
      $scope.unitReponseData = unitResponse.data.UnitItem;
  	}, function(err){
  		console.error('ERR', err);
  	})

    $http.get('http://localhost:8888/api/AccountSPointItems/read')
    .then(function(sensorPointResponse){
        console.log('Success', sensorPointResponse); // JSON object
        $scope.sensorPointResponseData = sensorPointResponse.data;
      }, function(err){
        console.error('ERR', err);
      })

  // $scope.url = "https://api.ipify.org/";
  //     $http({
  //         method: 'jsonp',
  //         url: $scope.url,
  //         params: {
  //             format: 'jsonp',
  //             callback: 'JSON_CALLBACK'
  //         }
  //     }).then(function (resp) {
  //         $scope.responseData = resp.data.ip;
  //     });


  // $http.get('https://api.ipify.org?format=json', params: {
  //           format: 'jsonp',
  //           name: 'Super Hero',
  //           callback: 'JSON_CALLBACK'
  //       }).then(function(resp){
  // 		console.log('Success', resp); // JSON object
  //     $scope.responseData = resp.data;
  // 	}, function(err){
  // 		console.error('ERR', err);
  // 	})

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
  // $scope.series = ['Series A', 'Series B'];
  // $scope.data = [
  //     [65, 59, 80, 81, 56, 55, 40],
  //     [28, 48, 40, 19, 86, 27, 90]
  // ];
});
