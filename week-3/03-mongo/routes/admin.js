const express = require("express");  // Import express
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = express.Router(); 

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username:username,
        password:password,
    })
    res.send("Admin Created Successfully")
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const price = req.body.price;
    const img = req.body.img;
    const published = req.body.published;
    const course =  new Course({
        title:title,
        desc:desc,
        price:price,
        img:img,
        published:published
    })
    await course.save()
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const allcourse = await Course.find({})
    console.log(allcourse)
    res.json({allcourse})
});

module.exports = router;