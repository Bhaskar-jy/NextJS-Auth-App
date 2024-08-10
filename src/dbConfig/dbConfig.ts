import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
    } catch (error) {
        console.log("Somthing went wrong in connection to DB")
        console.log(console.log(error))
    }
}