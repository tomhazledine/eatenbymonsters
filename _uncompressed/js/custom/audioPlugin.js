var audioWrapper = $('#audio');
var rawAudioData = $('#audioData');

var playerWrapper = document.getElementById('player');
// console.log(playerWrapper);
var songsData = songs;

// console.log(songs);

function AudioPlayer(songData,playerWrapper){
    
    var playPauseButtons = playerWrapper.getElementsByClassName('playlistSongTrigger');
    var currentSongIndex = false;
    var myAudio = [];
    
    // Setup event listeners
    for (i = 0; i < playPauseButtons.length; i++) {
        playPauseButtons[i].addEventListener('click',_playPauseAudio,false);
    }

    // Initialise Audio
    for (var i = 0; i < songData.length; i++) {
        myAudio[i] = new Audio(songData[i].url);
    }

    function _playPauseAudio(){
        var targetSong = this.getAttribute('data-song-index');
        // playSong(targetSong);
        if (_hasClass(this,'songPlaying')) {
            pauseAll();
            _removeClass(this,'songPlaying');
        } else {
            for (i = 0; i < playPauseButtons.length; i++) {
                _removeClass(playPauseButtons[i], 'songPlaying');
            }
            playSong(targetSong);
            _addClass(this,'songPlaying');
        }


    }

    function pauseAll(){
        for (var i = 0; i < songs.length; i++) {
            myAudio[i].pause();
        }
    }

    function playSong(index){
        // console.log(index);
        // console.log(myAudio);
        
        currentSongIndex = index;
        for (var i = 0; i < songs.length; i++) {
            // console.log(myAudio[i]);
            if (i != index) {
                myAudio[i].pause();
            }
        }
        myAudio[index].play();
    }

    // Simulate jQuery helpers
    
    // hasClass
    function _hasClass(el, className){
        if (el.classList) {
            var result = el.classList.contains(className);
        } else {
            var result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
        return result;
    }

    // addClass
    function _addClass(el, className){
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    }

    // removeClass
    function _removeClass(el, className){
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

}

AudioPlayer(songsData,playerWrapper);