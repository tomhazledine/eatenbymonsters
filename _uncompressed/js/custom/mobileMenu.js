var mobileNavToggle = $('#mobileNavToggle');
var mainMenu = $('#mainMenu');

mobileNavToggle.on('click',function(){
    $(this).toggleClass('open');
    mainMenu.toggleClass('open');
});