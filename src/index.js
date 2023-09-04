import app from "./app.js";
import {connectDB} from "./db.js";
import { PORT } from "./config.js";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 9090;

connectDB();
app.listen(PORT)
console.log("server on port", PORT)