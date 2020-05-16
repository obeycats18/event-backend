const {Menu} = require('./MenuModel')

function createMenu(app) {
    app.post('/menu/create', function(request, respones) {
        const payload = {
            name: request.body.name,
            dishes: request.body.dishes
        }

        console.log(payload)

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

function getMenusByName(app) {
    app.get('/menu', function(request, respones) {
        const id = request.query.id
        Menu.findById(id).populate('dishes').exec(function(error, menu) {
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

function getAllMenus(app) {
    app.get('/menus', function(request, respones) {
        Menu.find({}).populate('dishes').exec(function(error, menu) {
            if(error) {
                return respones.json({
                    status: 500,
                    error: error
                })
            }

            if(menu === null) {
                return respones.json({
                    status: 404,
                    message: 'Menus not found'
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
    getMenusByName: getMenusByName,
    getAllMenus: getAllMenus
}