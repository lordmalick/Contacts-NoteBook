const axios = require('axios');
const BASE_URL = process.env.BASE_URL || "http//localhost:3000/"
exports.homeRoutes = (req, res) => {
    //get request to /api/users
    axios.get(BASE_URL)
        .then(function(response){
            res.header('Access-Control-Allow-Origin', '*');
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get(BASE_URL+'/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}