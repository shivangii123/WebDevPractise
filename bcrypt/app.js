const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;
const User = require('./model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('Home page');
  res.send('welcome all of you ..!!!\n how are you');
});

app.post('/signup', async (req, res)=>{
    const {name, email, password} = req.body ;

    try {
        let userExits = await User.findOne({email}) ;
        if(userExits){
            return res.status(401).send("User already exits")
        }     

        // console.log("hash starts");
        //     //hash mein hashed password after salting rounds comletes..
        // bcrypt.hash(myPlaintextPassword, 10, async function(err, hash) {
        //     // Store hash in your password DB.
        //     await User.create({ name, email, password:hash}) ;
        // });

        //***** We do hasing Password befr insrting in Schema using "pre"save function in model file *****//  
        // const hash = await bcrypt.hash(password, 10);
        // console.log("hash ends");
        // console.log(hash);

        await User.create({ name, email, password});
    
        res.status(200).json({
            status:"success",
            msg : "New user created successfully"
        })
    } catch (error) {
        res.status(500).json({
            msg :"Signup failed",
            error : error.message
        })
    }
})


app.post('/login', async(req, res)=>{
    const {email, password}= req.body ;

    const user = await User.findOne({email}) ;
    if(!user) return res.status(400).json({
            msg :"User does not exits, Invalid Email Id!" 
    })
    
    // user.password -> is hash passord, match both and check if valid..
    const match = await bcrypt.compare(password, user.password);

    if(match) res.status(200).json({
        msg :"Login successfull"
    })
    else res.status(400).json({
        msg :"Login failed ,Incorrect Password !"
    })

})


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/testing');
    app.listen(PORT, () => {
        console.log('Listening to http://localhost:' + PORT);
    });
}
main().catch(err => console.log(err));