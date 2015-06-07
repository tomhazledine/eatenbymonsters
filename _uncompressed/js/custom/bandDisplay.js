function getBandButtons(buttons){
    // bandButtons = data.find('.bandButton');
    // console.log(buttons);
    buttons.on('click', function(){
        // console.log('click');
        bandButton = $(this);
        console.log(bandButton);
        // bandButtonClick(bandButton);
        if (bandButton.hasClass('open')) {
            bandButton.removeClass('open');
        } else {
            buttons.removeClass('open');
            bandButton.addClass('open');
        }
    });
}
