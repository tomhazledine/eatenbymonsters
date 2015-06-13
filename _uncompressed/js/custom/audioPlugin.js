var audioWrapper = $('#audio');
var rawAudioData = $('#audioData');

var playerWrapper = document.getElementById('player');
// console.log(playerWrapper);
var songsData = songs;

// console.log(songs);

function AudioPlayer(songData,playerWrapper){

    var playPauseButtons = playerWrapper.getElementsByClassName('playlistSongTrigger');
    var currentSongIndex;
    var myAudio = [];
    var playTimer = playerWrapper.getElementsByClassName('songPlayTimer');
    var progressBar = playerWrapper.getElementsByClassName('songProgressSlider');
    var songLengthBox = playerWrapper.getElementsByClassName('songDuration');
    
    for (i = 0; i < songData.length; i++) {
        // Initialize Audio
        myAudio[i] = new Audio(songData[i].url);
        // Setup event listeners
        playPauseButtons[i].addEventListener('click',_playPauseAudio,false);
        myAudio[i].addEventListener('timeupdate', _updateProgress, false);
        // myAudio[i].addEventListener('canplay', _setLengthDisplay(i), false);
        // myAudio[i].addEventListener('ended', _setLengthDisplay(i), false);
        // myAudio[i].onLoad(function(){
        //     _setLengthDisplay(i);
        //     console.log('Song ' + i + ' loaded.');
        // });
        // _setLengthDisplay(i);
    }

    function pauseAll(){
        for (var i = 0; i < songs.length; i++) {
            myAudio[i].pause();
        }
    }

    function playSong(index){
        currentSongIndex = index;
        for (var i = 0; i < songs.length; i++) {
            if (i != index) {
                myAudio[i].pause();
            }
        }
        myAudio[index].play();
    }

    function sliderScrub(newPosition,index){
        var duration = myAudio[index].duration;
        var targetTime = duration * (newPosition / 100);
        myAudio[index].currentTime = targetTime;
    }

    function _playPauseAudio(){
        var targetSong = this.getAttribute('data-song-index');
        if (_hasClass(this,'songPlaying')) {
            pauseAll();
            _removeClass(this,'songPlaying');
        } else {
            for (i = 0; i < playPauseButtons.length; i++) {
                _removeClass(playPauseButtons[i], 'songPlaying');
            }
            playSong(targetSong);
            _addClass(this,'songPlaying');
            if (_hasClass(this,'notPlayedYet')) {
                _setLengthDisplay(targetSong);
                _removeClass(this, 'notPlayedYet');
            }
        }
    }

    function _updateProgress(){
        var progress = myAudio[currentSongIndex].currentTime;
        var duration = myAudio[currentSongIndex].duration;
        progressParsed = _secondsToMMSS(progress);
        playTimer[currentSongIndex].innerHTML = progressParsed;

        if (progress >= duration) {
            _removeClass(playPauseButtons[currentSongIndex], 'songPlaying');
        }

        var progressPercent = (progress / duration * 100).toFixed(2);

        progressBar[currentSongIndex].value = progressPercent;
    }

    function _secondsToMMSS(seconds){
        var mins = Math.floor(seconds % 3600 / 60);
        mins = mins.toFixed(0);
        mins = mins.toString();
        var secs = Math.floor(seconds % 3600 % 60);
        secs = secs.toFixed(0);
        secs = secs.toString();
        if (secs < 10) {
        secs = '0' + secs;
        };
        var mmss = mins + ':' + secs;
        return mmss;
    }

    function _setLengthDisplay(index){
        var songLength = myAudio[index].duration;
        var duration = _secondsToMMSS(songLength);
        var songClass = '.song' + index;
        songLengthBox[index].innerHTML = duration;
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

    function testPublic(){
        console.log('a public function');
    }

    return {
        sliderScrub: sliderScrub,
        playSong: playSong,
        pauseAll: pauseAll
    }

}

var myAudioPlayer = AudioPlayer(songsData,playerWrapper);