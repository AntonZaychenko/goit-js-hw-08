import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const vimeoTimeUpdateKey = 'videoplayer-current-time'

player.on('play', function() {
    console.log('played the video!', localStorage.getItem(vimeoTimeUpdateKey));
    this.setCurrentTime(localStorage.getItem(vimeoTimeUpdateKey))
    
});
player.on('timeupdate', function(e) {
    localStorage.setItem(vimeoTimeUpdateKey, e.seconds);
});
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

