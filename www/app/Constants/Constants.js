angular.module('ionicCharts')
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.constant('TEMPERATURE_CUTOFF', {
  cutoffValue: 20
})

.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public_role'
})

.constant('ApiEndpoint', {
  url: 'https://www.bn-access.com/api'
})

.constant('JsonData', {
  "UnitItems":[{
    "UnitID":4762,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1213",
    "ItemDesc":"Market Pantry Milk"
  },
  {
    "UnitID":4762,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1214",
    "ItemDesc":"Market Pantry Milk"
  },
  {
    "UnitID":4762,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1215",
    "ItemDesc":"Kemps Milk"
  },
  {
    "UnitID":4762,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1215",
    "ItemDesc":"Kemps Whole Milk"
  },
  {
    "UnitID":4763,
    "DeptCategory": "Deli",
    "DPCI": "205-34-2424",
    "ItemDesc":"Whole Chicken"
  },
  {
    "UnitID":4763,
    "DeptCategory": "Deli",
    "DPCI": "205-34-2425",
    "ItemDesc":"Drumstick Chicken"
  }
]
});
