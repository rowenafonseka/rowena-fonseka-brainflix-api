const express = require("express");
const router = express.Router();
const fs = require("fs");

function videoDetails() {
  const videoFile = fs.readFileSync("./data/videos.json");
  const videoData = JSON.parse(videoFile);
  return videoData;
}

// first endpoint to display videos in videolist
router.get("/", (req, res) => {
  const videos = videoDetails();

  const videosArray = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });

  res.json(videosArray);
});

// second endpoint to display a selected video detail
