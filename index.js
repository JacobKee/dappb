import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 8888;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => res.send("Hello World"));

import networkRouter from "./routes/network";
import tokenRouter from "./routes/token";
import web3Router from "./routes/web3";

app.use("/network", networkRouter);
app.use("/token", tokenRouter);
app.use("/web3", web3Router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});