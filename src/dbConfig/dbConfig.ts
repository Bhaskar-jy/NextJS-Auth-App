import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (err: any) => {
      console.log(
        "Mongodb connection error, please make sure db is up and running ;" +
          err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Somthing went wrong in connection to DB");
    console.log(console.log(error));
  }
}
