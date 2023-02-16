import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
const videoPlayer = document.getElementById('vimeo-player');
const vimeo = new Player(videoPlayer);
const handlePlayerStop = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};
vimeo.on('timeupdate', Throttle(handlePlayerStop, 1000));
const breakPoint = localStorage.getItem('videoplayer-current-time');
vimeo.setCurrentTime(breakPoint);
