var bandDataWrapper = $('#bandSearchWrapper');

if (bandDataWrapper.length) {

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
                this.bandsData.forEach(function(band){
                    band.$set('open',false);
                });
                item.$set('open',true);
                // if (item.class == '') {
                //     item.class = 'open';
                // } else {
                //     item.class = '';
                // }
            }


        }

    });

}

function closeAllBandPostLists(){
    // console.log(target);
    // if (target)
    $('.bandButton').removeClass('open');
    // target.toggleClass('open');
}

function testFunc(item){
    console.log(item);
}