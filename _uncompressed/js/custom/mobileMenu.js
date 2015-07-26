var mobileNavToggle = $('.mobileNavToggle');
var mainMenu = $('#mainMenu');
var relativeHeaderWrapper = $('.relativeHeaderWrapper');
var fixedHeaderWrapper = $('.fixedHeaderWrapper');
var mainHeader = $('.mainHeader');

mobileNavToggle.on('click',function(){
    mainHeader.toggleClass('open');
    // mobileNavToggle.toggleClass('open');
    // mainMenu.toggleClass('open');
    // fixedHeaderWrapper.toggleClass('open');
    // relativeHeaderWrapper.toggleClass('open');
});