const { Router } = require("express");
const express= require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const jwt = require('jsonwebtoken');
const {secretKey} = require('../config');
const { Course,Admin } = require("../db");
// Admin Routes
router.post('/signup', async(req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   const user = new Admin({
    username : username,
    password:password
   })
   await user.save()
   res.send("Admin Created Successfully")
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password
    const user = await Admin.findOne({
        username:username,
        password:password
    })
    if(user){
            const token  = jwt.sign({username},secretKey );
            res.json({token});
        }
        else{
            res.send("Username or Password is wrong")
        }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price
    const img = req.body.img;
    const published = req.body.published;
    const course = new Course({
        title : title,
        description:description,
        price : price,
        img:img,
        published:published
       })
       await course.save()
       res.send("Course Added Successfully")
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const courses = await Course.find({});
    res.json({courses})
});

module.exports = router;