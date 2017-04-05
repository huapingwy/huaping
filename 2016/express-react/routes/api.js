const crypto = require('crypto');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const contentSchema = require('../schemas/content');
const contentModel = mongoose.model('Content', contentSchema);
const UserModel = require('../model/user');
const categoryModel = require('../model/category');
const articleModel = require('../model/contents');
let resData;

router.use(function(req, res, next){
    resData = {
        code: 1000,
        data: {
            message: ''
        }
    }
    next();
})

router.get('/insert', function (req, res) {
    
    const content = new contentModel({
        title: 'huaping',
        content: 'content'
    });
    
    content.save(function(err){
        if(err) {
            return;
        }
        res.end('插入成功');
    })
});

router.get('/remove', function (req, res) {
    contentModel.findOne({title: 'huaping'}, function(err, model) {
        if(err) {
            return;
        }
        model.remove(function (err) {
            if(err) {
                return;
            }
            res.end('删除成功');  
        })
    })
});

router.get('/update', function (req, res) {
    contentModel.update({title: 'huaping'},{$set: {title: 'update'}}, function (err) {
        if(err){return};
        res.send('跟新成功');
    })
});

router.get('/query', function (req, res) {
    // console.log(contentModel.$where());
    /*contentModel.$where('titl').exec(function (err,doc) {
        if(err) {
            res.send('查询失败');
            return;
        };
        res.send('查询成功', doc);
    })*/
    
    contentModel.find({title: 'huaping'}).then(function(result){
        res.send(result)
    })
})

router.post('/register', function(req, res, next){
    const userName = req.body.username;
    const password = req.body.password;

    if(userName == '') {
        resData.code = 5000;
        resData.data.message = '用户名不能为空';
        res.json(resData)
        return;
    } else if(password == '') {
        resData.code = 5000;
        resData.data.message = '用户名密码不能为空';
        res.json(resData)
        return;
    }

    const cipher = crypto.createCipher('aes192', 'huaping');
    let cipherPassword = cipher.update(password, 'utf8', 'hex');
    cipherPassword += cipher.final('hex');

    console.log(cipherPassword);


    UserModel.findOne({username: userName}).then(function(userInfo){
        if(userInfo) {
            resData.code = 5000;
            resData.data.message = '用户名已注册过！';
            res.json(resData);
            return;
        }
        
        const user = new UserModel({
            username: userName,
            password: cipherPassword
        })
        user.save();
    }).then(function(newUserInfo){
        resData.data.message = '注册成功！'
        res.json(resData)
    })
});


router.post('/login', function(req, res, next) {
    const userName = req.body.username;
    const password = req.body.password;
    UserModel.findOne({username: userName}).then(function(user){

        const decipher = crypto.createDecipher('aes192', 'huaping');
        let userPassword = decipher.update(user.password, 'hex', 'utf8');
        userPassword += decipher.final('utf8');

        console.log(userPassword, user);


        if(user.username === userName && userPassword == password) {
            req.cookies.set('key', user.id);
            req.cookies.set('userInfo', JSON.stringify({username: userName}));

            resData.data.message = '登录成功';
            res.json(resData);
            return;
        }
        resData.data.message = '登录失败';
        res.json(resData);
    })
})


router.post('/addCategory', function (req, res, next) {
    const name = req.body.name;
    if(!name) {
        resData.code = 5000;
        resData.data.message = '分类名称不能为空';
        res.json(resData);
        return;
    }

    categoryModel.findOne({name: name}).then(function(result) {
        if(result) {
            resData.code = 5000;
            resData.data.message = '分类已存在';
            res.json(resData);
            return;
        }

        const category = new categoryModel({
            name: name
        });

        category.save();
        resData.data.message = '分类添加成功';
        res.json(resData);

    })
})

router.post('/addArticle', function(req, res, next){
    res.json(resData);
});

module.exports = router;