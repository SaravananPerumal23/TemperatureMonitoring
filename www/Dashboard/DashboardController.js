angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, AuthService) {


  // $http({method: 'GET', url: 'http://date.jsontest.com/'})
  //   .success(function(data) {
  //     $scope.result = data;
  //   });


  // $scope.result = "";
  // $scope.result = "FFFF";
  //   $http.get("http://date.jsontest.com/")
  //     .success(function(data, status, headers,config){
  //       //console.log('data success');
  //       //console.log(data); // for browser console
  //       //data = "TEST";
  //       $scope.result = data; // for UI
  //     })
  //     .error(function(data, status, headers,config){
  //       //console.log('data error');
  //       $scope.result = "ERRROR"; // for UI
  //     })
  //     .then(function(result){
  //       //$scope.result = "ERRROR";
  //       things = result.data;
  //     });

  // $http.get('http://date.jsontest.com/')
  //     .success(function(data, status, headers,config){
  //       $scope.responseData = 'success';
  //       console.log('data success');
  //       console.log(data); // for browser console
  //       //$scope.result = data; // for UI
  //       //$scope.response = data;
  //     })
  //     .error(function(data, status, headers,config){
  //       console.log('data error');
  //     })
  //     .then(function(result){
  //       $scope.responseData = 'success';
  //       //things = result.data;
  //     });


  //$http.get("https://api.ipify.org?format=json", {headers: { 'Access-Control-Allow-Origin': '*' , 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS', 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Codingpedia,Authorization'}})

  $http({
                  url: "https://api.ipify.org?format=json", method: 'GET',
                  headers : {'Access-Control-Allow-Origin': '*', 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
              }).then(function(resp){
      console.log('Success', resp); // JSON object
      $scope.result = 'SUCCESS';
    }, function(err){
      console.error('ERR', err);
        $scope.result = resp.data.message;
    })

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };


    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

});
