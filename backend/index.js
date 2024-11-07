import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import 'dotenv/config';
import authRoutes from "./routes/auth.js";
import travelRoutes from "./routes/travel.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("hiii");
});

app.use("/auth", authRoutes);

app.use("/travel", travelRoutes);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}.`))

    }).catch((error) => console.log(`${error} did not connect`))
