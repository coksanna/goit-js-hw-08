import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
const iframeRef = document.querySelector('iframe');

const player = new Player(iframeRef);
player.on('timeupdate', throttle(setWatchingTime, 1000));
const getContentOfLocalStorage = JSON.parse(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(getContentOfLocalStorage.seconds || 0);

function setWatchingTime(data) {
    // console.log(data);
    return localStorage.setItem('videoplayer-current-time', JSON.stringify(data));    
}