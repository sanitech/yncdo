const express = require("express");
const env= require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

