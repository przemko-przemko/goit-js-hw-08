"use strict";
import throttle  from "lodash/throttle";
import _default from "../../node_modules/@vimeo/player"

const videoPlayer = document.querySelector('#vimeo-player');
const LOCAL_KEY = "videoplayer-current-time"
console.log(videoPlayer)


const player = new Vimeo.Player(videoPlayer);
player.on('play', function() {
    console.log('Play Video');
});
player.on('timeupdate',throttle((event) => {
    localStorage.setItem(LOCAL_KEY, `${event.seconds}` )

},1000))
player.setCurrentTime(localStorage.getItem(LOCAL_KEY))
