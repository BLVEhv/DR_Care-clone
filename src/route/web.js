import express from "express";

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send("Hi BLUE");
    });

    return app.use('/', router);
};

export default initWebRoute;