import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoute(app);

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Nodejs is running on ${port}`);
});