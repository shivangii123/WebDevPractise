const mongoose = require('mongoose');

async function connectMongo() {

    let url ='mongodb+srv://shivangi:shivangi@cluster0.ohvw0jx.mongodb.net/?appName=Cluster0'
    await mongoose.connect(url);
    console.log("Mongo connected");
}

module.exports = connectMongo;