const express = require("express");
const userRoute = require("../Router/UserRoute");
const errorHandler = require("../Middleware/ErrorHandler");
const app = express();
const dotenv = require("dotenv").config();

app.use(express.json());
app.use("/api/v1/user", userRoute);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("hi u");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on port " + process.env.PORT);
});
