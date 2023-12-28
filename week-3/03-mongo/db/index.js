const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhishek:OAypDDBi0snC5v9S@cluster0.4xp2dgo.mongodb.net/CourseDB')
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.error('Error connecting to the database:', error);
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}

});

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    purchasedCourse  : [
        {id : mongoose.Types.Object,
        ref :'Course'}
    ]

});

const CourseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    img: { type: String, required: true }, 
    published: { type: Boolean, required: true }, 
}); 

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}