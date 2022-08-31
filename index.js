// require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
// const cors = require("cors");
// const videoRoutes = require("./routes/videos");

// middlewares

// cors to allow front-end to interact with API
// app.use(cors());

// // middleware to post JSON in request body
// app.use(express.json());

// // use static image files
// app.use(express.static("./public"));

// Routes
// app.use("/videos", videoRoutes);

app.listen(PORT, () => {
  console.log("i hope this works" + PORT);
});
