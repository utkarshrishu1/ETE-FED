 const express=require('express');
 const Quote=require('../model/quoteMode');
 const router=new express.Router();
 const Comment=require('../model/commentModel');
 router.post('/createQuote',async(req,res)=>{
     try{
     const quote=new Quote(req.body);
     await quote.save();
     res.send({"message":"quote created successfully"});
     }catch(error){
        res.status(400).send({"error":error.message});
     }
 });
 router.get('/getAllQuote',async(req,res)=>{
     try{
         const quotes=await Quote.find({});
         if(quotes.length===0)
         {
             res.send({"message":"No quotes available"});
         }
         res.send(quotes);
     }catch(error){
         res.status(400).send({"error":error.message});
     }
 })
 router.get('/getQuote/:id',async(req,res)=>{
     try{
         const quote=await Quote.findOne({"_id":req.params.id});
         if(!quote)
         {
             throw new Error("Nothing found");
         }
         res.send(quote);
     }catch(error){
         res.status(400).send({"error":error.message});
     }
 });
 router.post('/addComment/:id',async(req,res)=>{
     try{
         const comment=new Comment({...req.body,"onPost":req.params.id});
         if(!comment)
         {
             throw new Error("Nothing found");
         }
         await comment.save();
         res.send({"message":"comment added"});
     }catch(error){
         res.status(400).send({"error":error.message});
     }
 });
 router.get('/getComment/:id',async(req,res)=>{
    try{
        const comments=await Comment.find({"onPost":req.params.id});
        if(!comments)
        {
            throw new Error("Nothing found");
        }
        res.send(comments);
    }catch(error){
        res.status(400).send({"error":error.message});
    }
});
 module.exports=router;