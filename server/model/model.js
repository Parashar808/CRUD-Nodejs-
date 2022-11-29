const mongoose=require("mongoose");
var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String,
})
const crud1=mongoose.model('CRUD1',schema);
module.exports=crud1;