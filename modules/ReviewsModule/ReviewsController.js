const{Reviews} = require('./ReviewsModel')

function createReviews(app){
    app.post('/reviews/create', function(req, res){
        let payload = {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            text:req.body.text,
            rating:req.body.rating
        }

        new Reviews(payload).save(function(error){
            if(error){
                return res.json({
                    status:500,
                    error:error
                })
            }

            return res.json({
                status:200,
                message:"created"
            })
        })
    })
}

function getReviews(app){
    app.get('/reviews', function(req, res){
        Reviews.find({}, function(error, reviews){
            if(error){
                return res.json({
                    status:500,
                    error:error
                })                
            }

            return res.json({
                status:200,
                reviews:reviews
            })
        }) 
    })
}

module.exports = {
    createReviews,
    getReviews
}