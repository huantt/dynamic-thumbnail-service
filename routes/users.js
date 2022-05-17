const express = require('express');
const router = express.Router();
const {getUserInfo} = require('../data-access/user')
const {screenshot} = require('../lib/screenshot')

router.get('/html/:userId', function (req, res, next) {
    let {userId} = req.params
    let userInfo = getUserInfo(userId);
    res.render('user-thumbnail', userInfo);
});

router.get('/thumbnail/:userId.png',  function (req, res, next) {
    let {userId} = req.params
    let htmlEndpoint = `${req.protocol}://${req.hostname}:${process.env.PORT||3000}/users/html/${userId}`
    console.log(htmlEndpoint)
    screenshot(htmlEndpoint, 1200, 630).then((file) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', `image/png`);
        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.end(file);
    }).catch(err => {
        res.statusCode = 500
        res.end(err.message)
    });
});

router.get('/:userId',  function (req, res, next) {
    let {userId} = req.params
    let userInfo = getUserInfo(userId);
    res.render('user', userInfo);
})


module.exports = router;
