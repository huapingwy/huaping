var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const categoryModel = require('../model/category');
let data = {
    title: 'Express',
};

router.use(function (req,res, next) {
    data.userInfo = req.userInfo;
    categoryModel.find().then(function(result){
        data.categoryInfo = result;
        next();
    })    
})



router.get('/', function(req, res, next) {
    console.log(data, 1111);
    res.render('index', data);
});
module.exports = router;
