const express = require('express')
const mongoose = require('mongoose');

const {Dishes} = require('./models/DishModel')

const app = express()

mongoose.connect('mongodb://127.0.0.1/event', function() {
    console.log('Connected to MongoDB')
});

app.use(express.json()) 

app.post('/dish/add', function(request, respones) {

    let payload = {
        name: request.body.name,
        cost: request.body.cost,
        composition: request.body.composition,
        weigth: request.body.weigth
    }

    new Dishes(payload).save(function(error) {

        if(error) {
            return respones.json({
                status: 500,
                error: error
            })
        }

        return respones.json({
            status: 200,
            message: 'Created'
        })
    })

})


app.listen(8080, function () {console.log('Server starting...')})