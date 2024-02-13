const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(express.json());  //Importing json middleware

require("./config/database").connect();

//routes import and mount
const user = require("./routes/user");
app.use("/api/v1",user);  //Mounting user on path api/v1

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`); 
})










