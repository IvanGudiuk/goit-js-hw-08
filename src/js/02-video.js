import Player from "@vimeo/player";
const throttle = require("lodash.throttle");
const videoPlayer = document.getElementById("vimeo-player");
const playerVimeo = new Player(videoPlayer);
const handlePlayerDuration = ({ duration, percent, seconds }) => {
  const playedTime = seconds;
  localStorage.setItem("videoplayer-current-time", playedTime);
};
playerVimeo.on("timeupdate", throttle(handlePlayerDuration, 1000));
const breakPoint = localStorage.getItem("videoplayer-current-time");
playerVimeo.setCurrentTime(breakPoint);
