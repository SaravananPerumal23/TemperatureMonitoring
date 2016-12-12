angular.module('temperatureMonitoring')
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.constant('TEMPERATURE_CUTOFF', {
  cutoffValue: 20
})

.constant('TEMPERATURE_THRESHOLD', {
  Frozen: {
    Min: -13,
    Max: 2
  },
  Dairy: {
    Min: 32,
    Max: 41
  },
  Fresh: {
    Min: 34,
    Max: 54
  },
  Beverages: {
    Min: -40,
    Max: 100
  }
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
    "ItemID": "20121213",
    "ItemDesc":"Market Pantry Yogurt",
    "Quantity": 44,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "ItemID": "20101214",
    "ItemDesc":"Old Plain Yogurt",
    "Quantity": 73,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "ItemID": "20202320",
    "ItemDesc":"Old Geek Yogurt",
    "Quantity": 60,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16167,
    "DeptCategory": "Dairy",
    "ItemID": "26749812",
    "ItemDesc":"Yoplain Yogurt",
    "Quantity": 37,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "ItemID": "20102215",
    "ItemDesc":"Kemps Milk",
    "Quantity": 120,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "ItemID": "20101215",
    "ItemDesc":"Market Pantry Milk",
    "Quantity": 45,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "ItemID": "20141234",
    "ItemDesc":"Horizon Organic Milk",
    "Quantity": 97,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16168,
    "DeptCategory": "Dairy",
    "ItemID": "20133455",
    "ItemDesc":"Lactaid Organic Milk",
    "Quantity": 33,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16169,
    "DeptCategory": "Frozen Foods",
    "ItemID": "78124232",
    "ItemDesc":"Lotza Motza Pizza",
    "Quantity": 25,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16169,
    "DeptCategory": "Frozen Foods",
    "ItemID": "78102092",
    "ItemDesc":"Digiorno Pizzeria",
    "Quantity": 10,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "ItemID": "53321243",
    "ItemDesc":"Raddish",
    "Quantity": 30,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "ItemID": "55332425",
    "ItemDesc":"Mint Leaves",
    "Quantity": 20,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "ItemID": "02335320",
    "ItemDesc":"Baby Spinach",
    "Quantity": 16,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16170,
    "DeptCategory": "Fresh Vegetables",
    "ItemID": "19610836",
    "ItemDesc":"Mushroom",
    "Quantity": 52,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "ItemID": "21342425",
    "ItemDesc":"Gold Plump Chicken",
    "Quantity": 43,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "ItemID": "20250198",
    "ItemDesc":"Market Pantry Fresh Chicken",
    "Quantity": 23,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "ItemID": "21212164",
    "ItemDesc":"Beyond Meat GF Chicken",
    "Quantity": 8,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16171,
    "DeptCategory": "Frozen Meat",
    "ItemID": "38242237",
    "ItemDesc":"Jimmy Dean Meat Lovers",
    "Quantity": 55,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16172,
    "DeptCategory": "Energy Drinks",
    "ItemID": "86282964",
    "ItemDesc":"Gatorade 16 Pack",
    "Quantity": 123,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16172,
    "DeptCategory": "Energy Drinks",
    "ItemID": "86523522",
    "ItemDesc":"5 Hour Energy",
    "Quantity": 50,
    "Image": "src/img/Pizza.jpg"
  },
  {
    "SensorPointID":16172,
    "DeptCategory": "Energy Drinks",
    "ItemID": "12256575",
    "ItemDesc":"Monster Energy Drink",
    "Quantity": 75,
    "Image": "src/img/Pizza.jpg"
  }
]
});
