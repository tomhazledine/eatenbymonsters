var bandDataWrapper = $('#bandSearchWrapper');

if (bandDataWrapper.length) {
    console.log(bandData);
}

new Vue({

    el: '#bandSearchWrapper',

    data: {

        bandsData: bandData

    },

    methods: {

        searchEntry: function() {
            // console.log('searching');
            closeAllBandPostLists();
        },

        openBandPosts: function(item) {
            console.log(item.class);
            if (item.class == '') {
                closeAllBandPostLists();
                item.class = 'open';
            } else {
                closeAllBandPostLists();
                item.class = '';
            }
        }


    }

});

function closeAllBandPostLists(){
    // console.log(target);
    // if (target)
    $('.bandButton').removeClass('open');
    // target.toggleClass('open');
}