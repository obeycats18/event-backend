const{Services} = require('./ServicesModel')

function createServices(app){
    app.post('/services/create', function(req, res) {
        let payload = {
            name: req.body.name,
            cost: req.body.cost
        }

        new Services(payload).save(function(error){
            if(error) {
                return res.json({
                    status: 500,
                    error:error
                })
            }

            return res.json({
                status: 200,
                message: 'created'
            })
        })


    })
}

function getServices(app){
    app.get('/services',function(req, res){
        Services.find({}, function(error, services){
            if(error){
                return res.json({
                    status:500,
                    error:error
                })
            }

            return res.json({
                status:200,
                services:services
            })
        })
    })
}

function deleteService(app){
    app.delete('/services/delete',function(req, res){
        let id = req.query.id
        Services.deleteOne({_id: id}, function(error){
            if(error){
                return res.json({
                    status:500,
                    error
                })
            }

            return res.json({
                status: 200,
                message: 'Deleted'
            })
        })
    })
}

module.exports = {
    createServices: createServices,
    getServices: getServices,
    deleteService: deleteService
}