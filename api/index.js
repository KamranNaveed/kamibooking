import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/Auth.js";
import usersRoute from "./routes/Users.js";
import hotelsRoute from "./routes/Hotels.js";
import roomsRoute from "./routes/Rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected")
})

//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//error handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json(errorMessage);
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    connect();
    console.log("Server running");
} )