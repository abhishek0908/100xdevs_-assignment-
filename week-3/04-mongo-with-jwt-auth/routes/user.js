const { Router } = require("express");
const {secretKey} = require('../config');
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = new User({
     username : username,
     password:password
    })
    await user.save()
    res.send("User Created Successfully")
});

router.post('/signin' , async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username : username,
        password:password
    })
    if(user){
        const token  = jwt.sign({username},secretKey);
        res.json({token})
    }
    else{
    res.send("Username or Password is wrong")
    }
});

router.get('/courses', userMiddleware , async(req, res) => {
    const courses = await Course.find({})
    res.send(courses)   
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        const checkcourse = await Course.findOne({
            _id: courseId
        });

        const checkuser = await User.findOne({
            username: username
        });

        if (!checkcourse) {
            return res.send("Course Does Not Exist");  // Corrected typo
        }
        
        if (!checkuser) {
            return res.send("User Does Not Exist");  // Corrected typo
        }

        await User.updateOne(
            { username: username },
            { $push: { purchasedCourse: courseId } }
        );

        res.send("Purchase Complete");
    } catch (error) {
        console.error('Error in post /courses/:courseId:', error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const username = req.headers.username;
    console.log(username)
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