const {Orders} = require('./OrderModel')

function createOrder(app) {
    app.post('/order/create', function(req, res) {

        const lastName = req.query.lastName

        let payload = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            telephone: req.body.telephone,
            date: req.body.date,
            time: req.body.time,
            count_peoples: req.body.count_peoples,
            editedDishes: req.body.editedDishes,
            services: req.body.services,
            cost: req.body.cost,
            typeEvent: req.body.typeEvent
        }


        const updatedValue = obj => {
            Object.keys(obj).forEach(key => {
                if (obj[key] === undefined) delete obj[key];
            });
            return obj;
          };

        console.log(payload)
        Orders.updateOne({last_name: lastName}, updatedValue(payload), {upsert: true}, function (error, order) {
            console.log(order)
            if(error) {
                return res.json({
                    status: 500,
                    error: error
                })
            }
            return res.json({
                status: 200,
                id: order.upserted,
                message: 'Created',
            })
        })
    })
}

function getOrders(app) {
    app.get('/orders', function(req, res) {
       
        Orders.find({}, function(error, orders) {
            if(error) {
                return res.json({
                    status: 500,
                    error: error
                })
            }
            if(orders === null) {
                return res.json({
                    status: 404,
                    message: 'Orders not found'
                })
            }

            return res.json({
                status: 200,
                orders: orders
            })
        })
    })
}

function getOrderByLastName(app) {
    app.get('/order', function(req, res) {
       
        const lastName = req.query.lastName

        Orders.findOne({last_name: lastName}).populate('services').exec( function(error, order) {
            if(error) {
                return res.json({
                    status: 500,
                    error: error
                })
            }
            if(order === null) {
                return res.json({
                    status: 404,
                    message: 'Order not found'
                })
            }

            return res.json({
                status: 200,
                order
            })  
        })
    })
}


module.exports = {
    createOrder: createOrder,
    getOrders: getOrders,
    getOrderByLastName
}