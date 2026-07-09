
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    Crname : String ,
    description :String,
    credits : Number ,
    studentId : [ {
        type :mongoose.Types.ObjectId ,
        ref :"Students"
    }]


})

const courseModel = new mongoose.model("Courses" , courseSchema);

module.exports = courseModel ; 