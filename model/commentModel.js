const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
            comment:{
                type:String,
                required:true
            },
            onPost:{
                type:mongoose.Types.ObjectId,
                required:true
            }
});
const commentModel=mongoose.model("comments",commentSchema);
module.exports=commentModel;