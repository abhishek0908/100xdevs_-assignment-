const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();

// Admin Routes
app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const user = await new Admin({
        username:username,
        email:email,
        password:password,
    })
    user.save();
    res.send("Admin Created Successfully")
});

app.post('/courses', adminMiddleware, async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const desc = req.body.desc;
    const price = req.body.price;
    const img = req.body.url;
    const published = req.body.published;
    const course = await new Course({
        id:id,
        title:title,
        desc:desc,
        price:price,
        img:img,
        published:published
    })
    course.save()
});

app.get('/courses', adminMiddleware, async(req, res) => {
    const allcourse = await Course.find({})
    res.send().json({allcourse})
});

module.exports = router;