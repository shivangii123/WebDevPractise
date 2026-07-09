
const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name : String ,
    email :String,
    rollNo :Number ,
    //mapping Courses Collection ...
    CourseId : [{
        type : mongoose.Types.ObjectId ,
        ref :"Courses"
    }]


})

const studentModel = new mongoose.model("Students" , studentSchema);

module.exports = studentModel ; 