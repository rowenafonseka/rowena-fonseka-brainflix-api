const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

function videoDetails() {
  const videoFile = fs.readFileSync("./data/videos.json");
  const videoData = JSON.parse(videoFile);
  return videoData;
}

// first endpoint to display videos in videolist
router.get("/", (_req, res) => {
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
router.get("/:videoId", (req, res) => {
  const videos = videoDetails();
  const selectedVideo = videos.find((video) => video.id === req.params.videoId);

  if (!selectedVideo) {
    return res.status(404).send("Video not found");
  }

  res.json(selectedVideo);
});

// third endpoint to post video
router.post("/", (req, res) => {
  // grab function for parsing json video above
  const updateVideoList = videoDetails();

  // create a new object for new video
  const newVideo = {
    id: crypto.randomUUID(),
    title: req.body.title,
    channel: "Row Your Boat",
    image: "http://localhost:8080/images/Upload-video-preview.jpg",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "5:00",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };

  // push new video to updated video list
  updateVideoList.push(newVideo);

  // persist data to videos.json
  fs.writeFileSync("./data/videos.json", JSON.stringify(updateVideoList));

  res.status(200).json(newVideo);
});

module.exports = router;
