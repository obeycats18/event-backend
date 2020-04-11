const {Dishes} = require('./DishModel')

function createDish(app) {
    app.post('/dish/create', function(request, respones) {
        let payload = {
            name: request.body.name,
            cost: request.body.cost,
            composition: request.body.composition,
            weight: request.body.weight
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
} 

function getAllDishes(app) {
    app.get('/dishes', function(request, respones) {
        Dishes.find({}, function(error, dishes) {
            if(error) {
                return respones.json({
                    status: 500,
                    error: error
                })
            }

            return respones.json({
                status: 200,
                dishes: dishes
            })
        })
    })
} 

module.exports = {
    createDish: createDish,
    getAllDishes: getAllDishes
}

