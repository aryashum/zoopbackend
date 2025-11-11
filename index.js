const { connectToDataBase } = require("./connection");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// PORT select based on environment
let PORT;
process.env.STATUS === "dev"
  ? (PORT = process.env.DEV_PORT)
  : (PORT = process.env.PROD_PORT);

// MIDDLEWARES
const { corsMiddle } = require('./middlewares/cors.js')
app.use(express.json());
app.use(corsMiddle)
app.use(express.urlencoded({ extended: true }));

// DB Connection
let DB_URL;
process.env.STATUS === "dev"
  ? (DB_URL = process.env.MONGO_URL_DEV)
  : (DB_URL = process.env.MONGO_URL_PROD);

connectToDataBase(DB_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("There Was an error", err);
  });

// ROUTES
const { userRouter } = require("./routes/userRouter.js");
const { storeRouter } = require("./routes/storeRouter.js");
const { paymentRouter } = require("./routes/paymentRouter.js");

app.use("/user", userRouter);
app.use("/store", storeRouter);
app.use("/payment", paymentRouter);

// =================== PROMETHEUS METRICS ===================
const client = require('prom-client');

const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// ===========================================================

// START SERVER
process.env.STATUS === "dev"
  ? app.listen(PORT, () => console.log(`Listening on ${PORT}`))
  : app.listen(PORT);
