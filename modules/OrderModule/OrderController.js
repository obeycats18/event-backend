const {Orders} = require('./OrderModel')

function createOrder(app) {
    app.post('/order/create', function(req, res) {

        const lastName = req.query.lastName

        const payload = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            telephone: req.body.telephone,
            date: req.body.date,
            time: req.body.time,
            count_peoples: req.body.count_peoples,
            menu: req.body.menu,
            cost: req.body.cost
            // services: req.body.services,
        }

        const updatedValue = obj => {
            Object.keys(obj).forEach(key => {
                if (obj[key] === undefined) delete obj[key];
            });
            return obj;
          };

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

module.exports = {
    createOrder: createOrder,
    getOrders: getOrders
}