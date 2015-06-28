// var audioWrapper = $('#audio');
// var rawAudioData = $('#audioData');

var playerWrapper = document.getElementById('player');

if (typeof songs !== 'undefined') {
    var songsData = songs;
    // if (myAudioPlayer != null) {
        var myAudioPlayer = AudioPlayer(songsData,playerWrapper);
    // }
}