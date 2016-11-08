angular.module('ionicCharts')

.controller("DashboardController", function($scope, $http, $state, $ionicPopup, SensorPointDetails, dataFactory, ApiEndpoint, sessionToken, AuthService, TEMPERATURE_CUTOFF) {

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

// $scope.unitReponseData = function() {
//   var inputParam = { 'AccountID': 4761 };
//   dataFactory.getDigiResponse('/AccountUnitItems/read/', inputParam)
// };

// $http.get('http://localhost:8888/api/AccountUnitItems/read/')
// .then(function(unitResponse){
//   $scope.unitReponseData = unitResponse.data.UnitItem;
// }, function(err){
// })

// var inputParam = { AccountID: 4761 };
// dataFactory.getDigiResponse('/AccountUnitItems/read/', inputParam)
// .then(function(response) {
//   //$scope.unitReponseData = function()
//   alert(response.data);
// }, function(err) {alert('ERROR');});


var unitItemsRequest = { method: 'POST',
                     crossDomain: true,
                     url: ApiEndpoint.url + '/AccountUnitItems/read/',
                     headers: {
                       'Content-Type': 'application/json',
                       'Authorization': 'Basic ' + sessionToken.sessionTokenID
                     },
                     data: { 'AccountID': 4761 }
                    }
$http(unitItemsRequest)
.then(function(unitItemsResponse){
  $scope.unitReponseData = unitItemsResponse.data;
}, function(err){
})



// $http.get('http://localhost:8888/api/AccountSPointItems/read')
// .then(function(sensorPointResponse){
//   $scope.sensorPointResponseData = sensorPointResponse.data.SPointItem;
// }, function(err){
// })

var spointItemsRequest = { method: 'POST',
                     crossDomain: true,
                     url: ApiEndpoint.url + '/AccountSPointItems/read/',
                     headers: {
                       'Content-Type': 'application/json',
                       'Authorization': 'Basic ' + sessionToken.sessionTokenID
                     },
                     data: { 'AccountID': 4761 }
                    }
$http(spointItemsRequest)
.then(function(spointItemsResponse){
  $scope.sensorPointResponseData = spointItemsResponse.data;
}, function(err){
})



$scope.logout = function() {
  AuthService.logout();
  $state.go('login');
};

$scope.onClick = function(sensorPointId, evt) {
  SensorPointDetails.setSensorPointID(sensorPointId);
  $state.go('main.sensorPoint');
};
});
