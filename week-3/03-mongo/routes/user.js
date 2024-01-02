const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = new User({
        username:username,
        password:password,
    })
    user.save();
    res.send("User Created Successfully")
});

router.get('/courses', async(req, res) => {
    const allcourse = await Course.find({})
    res.json({allcourse})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const username = req.body.username;
    const courseId = req.params.courseId;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.send("Course Doesn't Exist");
        }

        const user = await User.findOne({"username": username}); // Using findOne instead of find
        if (!user) {
            return res.send("User Doesn't Exist");
        }

        user.purchasedCourse.push(courseId);
        await user.save();
        res.send("Course is Pushed Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.body.username;
    try {
        const user = await User.findOne({ "username": username });
    
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.send( user.purchasedCourse );
    
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router