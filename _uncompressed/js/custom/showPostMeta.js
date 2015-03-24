var showPostMetaToggle = $('.showPostMetaToggle');
var showPostMetaBox = $('.showPostMetaBox');

showPostMetaToggle.on('click',function(){
    showPostMetaBox.toggleClass('open');
});