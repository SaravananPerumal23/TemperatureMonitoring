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
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1213",
    "ItemDesc":"Market Pantry Yogurt"
  },
  {
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1214",
    "ItemDesc":"Old Plain Yogurt"
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1215",
    "ItemDesc":"Kemps Milk"
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1215",
    "ItemDesc":"Market Pantry Milk"
  },
  {
    "SensorPointID":16169,
    "DeptCategory": "Frozen Foods",
    "DPCI": "781-21-4232",
    "ItemDesc":"Lotza Motza Pizza"
  },
  {
    "SensorPointID":16169,
    "DeptCategory": "Frozen Foods",
    "DPCI": "781-07-2092",
    "ItemDesc":"Digiorno Pizzeria"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "533-21-0243",
    "ItemDesc":"Raddish"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "553-34-2425",
    "ItemDesc":"Mint Leaves"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "023-34-2320",
    "ItemDesc":"Baby Spinach"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "192-61-0836",
    "ItemDesc":"Mushroom"
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "DPCI": "212-34-2425",
    "ItemDesc":"Gold Plump Chicken"
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "DPCI": "202-01-0198",
    "ItemDesc":"Market Pantry Fresh Chicken"
  },
  {
    "SensorPointID":16172,
    "DeptCategory": "Energy Drinks",
    "DPCI": "862-88-2964",
    "ItemDesc":"Gatorade 16 Pack"
  }
]
});
