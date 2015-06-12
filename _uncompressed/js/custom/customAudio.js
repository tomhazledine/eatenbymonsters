// var audioWrapper = $('#audio');
// var rawAudioData = $('#audioData');

// var songPlayPause = $('.playlistSongTrigger');

// var currentSongIndex = false;
// var myAudio = [];

// if (audioWrapper.length && rawAudioData.length) {
  
//   for (var i = 0; i < songs.length; i++) {
//     myAudio[i] = new Audio(songs[i].url);
//   };

//   getUpdates();

// };

// songPlayPause.on('click',function(){
//   var clickedButton = $(this);
//   var songIndex = clickedButton.data('song-index');
//   // console.log(songIndex);
//   // console.log(myAudio[songIndex]);
//   // myAudio[songIndex].play();

//   if (clickedButton.hasClass('songPlaying')) {
//     // console.log('Pause!');
//     myAudio[songIndex].pause();
//     clickedButton.removeClass('songPlaying');
//     clickedButton.addClass('songPaused');
//   } else {
//     // console.log('Play!');
//     songPlayPause.removeClass('songPlaying');
//     songPlayPause.addClass('songPaused');
//     playSong(songIndex,clickedButton);
//     clickedButton.removeClass('songPaused');
//     clickedButton.addClass('songPlaying');
//     console.log(currentSongIndex);
//   }

// });

// function playSong(index,button){
//   // stop all songs playing
//   currentSongIndex = index;
//   for (var i = 0; i < songs.length; i++) {
//     if (i != index) {
//       myAudio[i].pause();
//     };
//   };
//   // Play Target Song
//   myAudio[index].play();
//   // If it's the first time the song has been played,
//   // get the song's length
//   if (button.hasClass('notPlayedYet')) {
//     var songLength = myAudio[index].duration;
//     //console.log(songLength);
//     // var mmss = songLength / 60;
//     // mmss = mmss.toFixed(2);
//     var duration = secondsToMMSS(songLength);

//     var songClass = '.song' + index;
//     var songLengthBox = $(songClass).find('.songDuration');
//     songLengthBox.html(duration);

//     // secondsToMMSS(songLength);
//     // console.log(mmss);
//     button.removeClass('notPlayedYet');
//   };
//   // Set the event listener for progress updates
//   // myAudio[index].addEventListener('timeupdate',updateProgress(index),false);
// }

// function secondsToMMSS(seconds){
//   var mins = Math.floor(seconds % 3600 / 60);
//   mins = mins.toFixed(0);
//   mins = mins.toString();
//   var secs = Math.floor(seconds % 3600 % 60);
//   secs = secs.toFixed(0);
//   secs = secs.toString();
//   if (secs < 10) {
//     secs = '0' + secs;
//   };
//   var mmss = mins + ':' + secs; 
//   // var mmss = seconds / 60;
//   // mmss = mmss / 60;
//   // mmss = mmss.toFixed(2);
//   return mmss;
// }

// function getUpdates(){
//   for (var i = 0; i < songs.length; i++) {
//     var progress = 'progress';
//     myAudio[i].addEventListener('timeupdate', updateProgress, false);
//   };
// };

// function updateProgress(){
//   var progressBarClass = '.song' + currentSongIndex;
//   var songElement = $(progressBarClass);
//   var playTimer = songElement.find('.songPlayTimer');
//   var progressBar = songElement.find('.songProgressSlider');
//   // console.log(progressBar);

//   var progress = myAudio[currentSongIndex].currentTime;
//   var duration = myAudio[currentSongIndex].duration;
//   progressParsed = secondsToMMSS(progress);
//   playTimer.html(progressParsed);

//   var progressPercent = (progress / duration * 100).toFixed(2);

//   progressBar.val(progressPercent);

//   // console.log(progressPercent);
//   // console.log(currentSongIndex);
// }

// function sliderScrub(newPosition,index){
//   // var what = index;
//   var duration = myAudio[index].duration;
//   var targetTime = duration * (newPosition / 100);
//   myAudio[index].currentTime = targetTime;
//   // console.log(what);
// }