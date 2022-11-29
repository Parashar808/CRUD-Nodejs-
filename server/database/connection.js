const mongoose=require("mongoose");

const connectdb=async()=>{
    try{    
        const con=await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb connected:${con.connection.host}`);

    }catch(err){
       console.log(err);
        process.exit(1);

        }
    }
 

    module.exports=connectdb;