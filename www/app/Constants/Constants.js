angular.module('ionicCharts')
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.constant('TEMPERATURE_CUTOFF', {
  cutoffValue: 100
})

.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public_role'
});
