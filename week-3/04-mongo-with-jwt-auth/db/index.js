const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/CourseDBAuth')
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.error('Error connecting to the database:', error);
});
// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String,
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourse : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    img : String,
    published : Boolean

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}