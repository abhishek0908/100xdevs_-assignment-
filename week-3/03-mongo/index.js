const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/CourseDB')
// .then(() => {
//     console.log('Connected to the database');
// })
// .catch((error) => {
//     console.error('Error connecting to the database:', error);
// });
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

