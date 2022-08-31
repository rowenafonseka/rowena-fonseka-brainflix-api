require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const axios = require("axios");

app.listen(PORT, () => {
  console.log("i hope this works" + PORT);
});
