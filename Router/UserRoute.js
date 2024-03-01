const express = require("express");
const { getUSer, createUser } = require("../Controller/UserController");
const userRoute = express.Router();

userRoute.route("/").get(getUSer).post(createUser);
module.exports = userRoute;
