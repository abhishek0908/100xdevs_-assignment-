const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course } = require("../db");

// User Routes
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const user = new Admin({
        username:username,
        email:email,
        password:password,
    })
    user.save();
    res.send("User Created Successfully")
});

app.get('/courses', async(req, res) => {
    const allcourse = await Course.find({})
    res.send().json({allcourse})
});

app.post('/courses/:courseId', userMiddleware, async(req, res) => {
        const email = req.body.email;
        const courseId = req.parms.courseId;
        try{
        const course = await Course.findById(courseId);
        if(!course)
        {
            res.send("Course Does'nt Exists")
        }
        const user = await User.find({"email":email});
        if(!user)
        {
            res.send("User Does'nt Exists")
        }
        user.purchasedCourse.push(course)
        await user.save();
        res.send("Course is Pushed Successfully")
    }
    catch{
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
        
});

app.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email: email });
    
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const purchasedCourses = user.purchasedCourses || [];
        res.json({ purchasedCourses: purchasedCourses });
    
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
