const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const categoryModel = require('../model/category');
let data = {
    title: 'Express-添加分类',
};

router.use(function (req,res, next) {
    data.userInfo = req.userInfo;
    categoryModel.find().then(function(result){
        data.categoryInfo = result;
        next();
    })    
})

router.get('/category', function(req, res, next) {
    res.render('admin/category', data);
});

router.get('/addArticle', function(req, res, next){
    data.title = '添加文章';
    res.render('admin/add-article', data);
})
module.exports = router;