import mongoose from "mongoose";
 export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName : "MERN_STCAK_JOB_SEEKER",
    }).then(()=>{
        console.log("connected to database")
    }).catch((error)=>{
        console.log(error)
    }) 
}