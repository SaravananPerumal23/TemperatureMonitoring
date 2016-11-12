angular.module('ionicCharts')

.controller('MainController', function($scope, $state, $ionicPopup, LoginService, AUTH_EVENTS) {
  $scope.username = LoginService.username();

  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to access this resource.'
    });
  });

  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    LoginService.logout();
    $state.go('login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You have to login again.'
    });
  });

  $scope.setCurrentUsername = function(name) {
    $scope.username = name;
  };
})

.controller('LoginController', function($scope, $state, $ionicPopup, LoginService) {
  $scope.data = {};

  $scope.login = function(data) {
    LoginService.login(data.username.toLowerCase(), data.password.toLowerCase()).then(function(authenticated) {
      $state.go('main.dash', {}, {reload: true});
      $scope.setCurrentUsername(data.username);
      data.username='';
      data.password='';
    }, function(err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  };
})
