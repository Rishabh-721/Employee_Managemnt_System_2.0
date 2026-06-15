import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Data base connected to ${conn.connection.host}`);
    } catch (err) {
        console.error(`Connection Error: ${err}`);
        process.exit(-1);
    }
}

export default connectDB;