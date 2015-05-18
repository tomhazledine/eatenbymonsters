var audioWrapper = $('#audio');
var rawAudioData = $('#audioData');

var songPlayPause = $('.playlistSongTrigger');

var myAudio = [];

if (audioWrapper.length && rawAudioData.length) {
  
  for (var i = 0; i < songs.length; i++) {
    myAudio[i] = new Audio(songs[i].url);
  };



};

songPlayPause.on('click',function(){
  var clickedButton = $(this);
  var songIndex = clickedButton.data('song-index');
  console.log(songIndex);
  console.log(myAudio[songIndex]);
  // myAudio[songIndex].play();

  if (clickedButton.hasClass('songPlaying')) {
    console.log('Pause!');
    myAudio[songIndex].pause();
    clickedButton.removeClass('songPlaying');
    clickedButton.addClass('songPaused');
  } else {
    console.log('Play!');
    songPlayPause.removeClass('songPlaying');
    songPlayPause.addClass('songPaused');
    playSong(songIndex,clickedButton);
    clickedButton.removeClass('songPaused');
    clickedButton.addClass('songPlaying');
  }

});

function playSong(index,button){
  // stop all songs playing
  for (var i = 0; i < songs.length; i++) {
    if (i != index) {
      myAudio[i].pause();
    };
  };
  // Play Target Song
  myAudio[index].play();
  // If it's the first time the song has been played,
  // get the song's length
  if (button.hasClass('notPlayedYet')) {
    var songLength = myAudio[index].duration;
    //console.log(songLength);
    var mmss = songLength / 60;
    mmss = mmss.toFixed(2);

    var songClass = '.song' + index;
    var songLengthBox = $(songClass).find('.songDuration');
    songLengthBox.html(mmss);

    // secondsToMMSS(songLength);
    // console.log(mmss);
    button.removeClass('notPlayedYet');
  };
}

function secondsToMMSS(seconds){
  var mmss = seconds / 60;
  return mmss;
}