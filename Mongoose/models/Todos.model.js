const mongoose = require('mongoose');

// 1.Create Schema(blueprint of Model looks like)
const TodosSchema = new mongoose.Schema({
    task : String,
    status : {type : Boolean, default :false} ,
    date :{type :Date,default :Date.now}  ,
    user_id : mongoose.Types.ObjectId 
})

// 2. Create a Model (i.e Collection, in which we insert documents)
// this collection has Constraints on it
const Todos = mongoose.model('Todos', TodosSchema) ;

module.exports = Todos // sending entire Todos model