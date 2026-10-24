import mongoose from "mongoose";
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected...")
	} catch (err) {
        console.log("MongoDB connection failed: " + err)
    }
};
