const express = require('express');
const app = express();

app.use(express.json());
const blogRouter = require('./routes/blogs.router');
const userRouter = require('./routes/users.router');

app.use('/blogs',blogRouter);
app.use("/users", userRouter);

app.listen(PORT, ()=>{
    console.log("server started");
})