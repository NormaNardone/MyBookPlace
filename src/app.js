import express from "express";
import morgan from "morgan";
import cookieParser  from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import listasRoutes from "./routes/listas.routes.js";
import cors from 'cors'


const app = express()

app.use(cors({
origin: "http://localhost:5173",
credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", listasRoutes);

export default app;