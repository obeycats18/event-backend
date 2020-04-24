const express = require('express')
const mongoose = require('mongoose');

const {createDish, getAllDishes} = require('./modules/DishModule/DishController')
const {createMenu, getMenusByName, getAllMenus} = require('./modules/MenuModule/MenuController')
const {createOrder, getOrders} = require('./modules/OrderModule/OrderController')
const {createServices, getServices} = require('./modules/ServicesModule/ServicesController')
const {createReviews, getReviews} = require('./modules/ReviewsModule/ReviewsController')

const app = express()

mongoose.connect('mongodb://127.0.0.1/event', function() {
    console.log('Connected to MongoDB')
});

app.use(express.json()) 

// Dishes Module
createDish(app)
getAllDishes(app)

// Menu Module
createMenu(app)
getMenusByName(app)
getAllMenus(app)

// Order Module
createOrder(app)
getOrders(app)

//Services Module
createServices(app)
getServices(app)

//Reviews Module
createReviews(app)
getReviews(app)

app.listen(8080, function () {console.log('Server starting...')})