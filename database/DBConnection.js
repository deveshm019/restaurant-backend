import mongoose from "mongoose";

export const DBConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"restaurant-app"
    }).then(()=>{
        console.log(`Connected to MongoDB successfully!`)
    }).catch((error)=>{
        console.log(`Error: ${error}`);
    })
}