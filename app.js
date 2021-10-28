const mongoose=require('mongoose');
const express=require('express');
mongoose.connect(process.env.MONGODB_URL);
const quoteRouter=require('./router/quoteRoute');
const app=express();
app.use(express.json());
app.use(quoteRouter);
app.listen(process.env.PORT,()=>{
    console.log("server started");
})