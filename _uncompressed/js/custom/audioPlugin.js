var audioWrapper = $('#audio');
var rawAudioData = $('#audioData');

var playerWrapper = document.getElementById('player');
// console.log(playerWrapper);
var songsData = songs;

// console.log(songs);

function AudioPlayer(songData,playerWrapper){
    var playPauseButtons = playerWrapper.getElementsByClassName('playlistSongTrigger');
    // console.log(playPauseButtons);
    for (i = 0; i < playPauseButtons.length; i++) {
        playPauseButtons[i].addEventListener('click',_playPauseAudio,false);
    }

    function _playPauseAudio(){
        var targetSong = this.getAttribute('data-song-index');
        console.log(targetSong);
    }
}

AudioPlayer(songsData,playerWrapper);