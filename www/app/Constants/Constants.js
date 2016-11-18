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
    "ItemDesc":"Market Pantry Yogurt",
    "Quantity": 44
  },
  {
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1214",
    "ItemDesc":"Old Plain Yogurt",
    "Quantity": 73
  },
  {
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "DPCI": "202-02-2320",
    "ItemDesc":"Old Geek Yogurt",
    "Quantity": 60
  },
  {
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "DPCI": "267-34-9812",
    "ItemDesc":"Yoplain Yogurt",
    "Quantity": 37
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1215",
    "ItemDesc":"Kemps Milk",
    "Quantity": 120
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "DPCI": "201-02-1215",
    "ItemDesc":"Market Pantry Milk",
    "Quantity": 45
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "DPCI": "201-42-1234",
    "ItemDesc":"Horizon Organic Milk",
    "Quantity": 97
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "DPCI": "201-33-3455",
    "ItemDesc":"Lactaid Organic Milk",
    "Quantity": 33
  },
  {
    "SensorPointID":16169,
    "DeptCategory": "Frozen Foods",
    "DPCI": "781-21-4232",
    "ItemDesc":"Lotza Motza Pizza",
    "Quantity": 25
  },
  {
    "SensorPointID":16169,
    "DeptCategory": "Frozen Foods",
    "DPCI": "781-07-2092",
    "ItemDesc":"Digiorno Pizzeria",
    "Quantity": 10
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "533-21-0243",
    "ItemDesc":"Raddish",
    "Quantity": 30
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "553-34-2425",
    "ItemDesc":"Mint Leaves",
    "Quantity": 20
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "023-34-2320",
    "ItemDesc":"Baby Spinach",
    "Quantity": 16
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "DPCI": "192-61-0836",
    "ItemDesc":"Mushroom",
    "Quantity": 52
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "DPCI": "212-34-2425",
    "ItemDesc":"Gold Plump Chicken",
    "Quantity": 43
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "DPCI": "202-01-0198",
    "ItemDesc":"Market Pantry Fresh Chicken",
    "Quantity": 23
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "DPCI": "212-12-0164",
    "ItemDesc":"Beyond Meat GF Chicken",
    "Quantity": 8
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "DPCI": "382-23-8237",
    "ItemDesc":"Jimmy Dean Meat Lovers",
    "Quantity": 55
  },
  {
    "SensorPointID":16172,
    "DeptCategory": "Energy Drinks",
    "DPCI": "862-88-2964",
    "ItemDesc":"Gatorade 16 Pack",
    "Quantity": 123
  },
  {
    "SensorPointID":16172,
    "DeptCategory": "Energy Drinks",
    "DPCI": "865-12-3522",
    "ItemDesc":"5 Hour Energy",
    "Quantity": 50
  },
  {
    "SensorPointID":16172,
    "DeptCategory": "Energy Drinks",
    "DPCI": "122-56-5756",
    "ItemDesc":"Monster Energy Drink",
    "Quantity": 75
  }
]
});
