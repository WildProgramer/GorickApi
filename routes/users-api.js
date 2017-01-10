var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {


    res.send('Something may happend here one day');

    // models.user.findById(1).then(function (users) {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.send(JSON.stringify(users.dataValues));
    // });

});

router.post('/', function (req, res, next) {

    var userJSON = req.body;
    var email = userJSON.email;
    var password = userJSON.password;

    if (email == null || password == null) {
        res.status(400);
        res.send('Username or Password is null');
    } else {
        models.user.find({
            where: {
                email: email,
                password: password
            }

        }).then(function (users) {
            if(users == null){

                res.status(401);
                res.send('Username or Password Incorrect');
            }else {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(users.dataValues));
            }
        });


    }


});

router.post('/singup', function (req, res, next) {

    var userJSON = req.body;
    var name = userJSON.name;
    var email = userJSON.email;
    var password = userJSON.password;

    if (email == null || name == null ||password == null ) {
        res.status(400);
        res.send('Please insert all values');
    }else{

        models.user.create({
            name: name,
            email: email,
            password: password

        }).then(function () {
            res.status(200);
            res.send('User created with success');
        })


    }


});
module.exports = router;