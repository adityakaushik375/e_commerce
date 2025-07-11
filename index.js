import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connectDB.js";
import authRoute from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoute from "./routes/cartRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;
app.use("/api/auth",authRoute);
app.use("/api/products", productRoutes);
app.use("/api/cart",cartRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})



