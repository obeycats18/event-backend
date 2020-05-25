const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');


const {createDish, getAllDishes, deleteDish} = require('./modules/DishModule/DishController')
const {createMenu, getMenusByName, getAllMenus, deleteMenu} = require('./modules/MenuModule/MenuController')
const {createOrder, getOrders, getOrderByLastName, deleteOrder} = require('./modules/OrderModule/OrderController')
const {createServices, getServices, deleteService} = require('./modules/ServicesModule/ServicesController')
const {createReviews, getReviews} = require('./modules/ReviewsModule/ReviewsController')

const app = express()

mongoose.connect('mongodb://127.0.0.1/event', function() {
    console.log('Connected to MongoDB')
});

app.use(express.json())
app.use(cors()) 


// Dishes Module
createDish(app)
getAllDishes(app)
deleteDish(app)

// Menu Module
createMenu(app)
getMenusByName(app)
getAllMenus(app)
deleteMenu(app)

// Order Module
createOrder(app)
getOrders(app)
getOrderByLastName(app)
deleteOrder(app)

//Services Module
createServices(app)
getServices(app)
deleteService(app)

//Reviews Module
createReviews(app)
getReviews(app)

app.listen(8080, function () {console.log('Server starting...')})