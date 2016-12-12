angular.module('temperatureMonitoring')

.controller("DashboardController", function($scope, $http, $state, $ionicPopup, SensorPointDetails, dataFactory, ApiEndpoint, sessionToken, LoginService, TEMPERATURE_CUTOFF, TEMPERATURE_THRESHOLD) {

$scope.imagesource = 'img/Pizza.jpg';


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

var inputParam = '{ AccountID: 4761 }';
dataFactory.getDigiResponse('/AccountUnitItems/read/', inputParam)
.then(function(unitItemsResponse){
  $scope.unitReponseData = unitItemsResponse.data;
}, function(err){
});

dataFactory.getDigiResponse('/AccountSPointItems/read/', inputParam)
.then(function(spointItemsResponse){
  $scope.sensorPointResponseData = spointItemsResponse.data;
}, function(err){
});

$scope.logout = function() {
  LoginService.logout();
  $state.go('login');
};

$scope.setImage = function(item){
  if(item.search("Pizza") != -1){
    return "img/Pizza.jpg";
  }
  else if(item.search("Milk") != -1){
    return "img/Milk.jpg";
  }
  else if(item.search("Drink") != -1){
    return "img/Drink.jpg";
  }
  else if(item.search("Meat") != -1){
    return "img/Meat.jpg";
  }
  else if(item.search("Vegetables") != -1){
    return "img/Vegetables.jpg";
  }
  else if(item.search("Yogurt") != -1){
    return "img/Yogurt.jpg";
  }
};

$scope.getThresholdTemp = function(deparatment){
  if(deparatment.search("Frozen") != -1){
    return TEMPERATURE_THRESHOLD.Frozen.Min + "°F To " + TEMPERATURE_THRESHOLD.Frozen.Max + "°F";
  }
  else if(deparatment.search("Fresh") != -1){
    return TEMPERATURE_THRESHOLD.Fresh.Min + "°F To " + TEMPERATURE_THRESHOLD.Fresh.Max + "°F";
  }
  else if(deparatment.search("Dairy") != -1){
    return TEMPERATURE_THRESHOLD.Dairy.Min + "°F To " + TEMPERATURE_THRESHOLD.Dairy.Max + "°F";
  }
  else if(deparatment.search("Beverages") != -1){
    return TEMPERATURE_THRESHOLD.Beverages.Min + "°F To " + TEMPERATURE_THRESHOLD.Beverages.Max + "°F";
  }
};

$scope.onClick = function(sensorPointId, sensorPointDesc, evt) {
  SensorPointDetails.setSensorPointID(sensorPointId, sensorPointDesc);
  $state.go('main.sensorPoint');
};
});
