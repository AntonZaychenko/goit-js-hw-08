import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const localTime = localStorage.getItem(TIME_KEY);    

const iframe = document.querySelector('iframe');
const player = new Player(iframe); 

if (localTime) {
    player.setCurrentTime(localTime);
};

// player.on('timeupdate', throttle(onTimeUpdate, 1000))
player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(TIME_KEY, data.seconds);
  }, 1000));
function onTimeUpdate(e) { 
    const time = e.seconds;
    localStorage.setItem(TIME_KEY, time);
};

