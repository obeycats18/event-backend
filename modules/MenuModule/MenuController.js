const {Menu} = require('./MenuModel')

function createMenu(app) {
    app.post('/menu/create', function(request, respones) {
        const payload = {
            name: request.body.name,
            dishes: request.body.dishes
        }

        new Menu(payload).save(function(error) {
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

function getAllMenus(app) {
    app.get('/menu', function(request, respones) {
        const name = request.query.name
        Menu.findOne({name: name}).populate('dishes').exec(function(error, menu) {
            if(error) {
                return respones.json({
                    status: 500,
                    error: error
                })
            }

            if(menu === null) {
                return respones.json({
                    status: 404,
                    message: 'Menu not found'
                })
            }

            return respones.json({
                status: 200,
                menu: menu
            })
        })

    })
}

module.exports = {
    createMenu: createMenu,
    getAllMenus: getAllMenus
}