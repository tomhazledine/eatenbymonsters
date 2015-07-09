var bandDataWrapper = $('#bandSearchWrapper');

// console.log(bandData);

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
                // console.log('boo!');
                if (item.open == false) {
                    this.bandsData.forEach(function(band){
                        band.$set('open',false);
                    });
                    item.$set('open',true);
                } else {
                    item.$set('open',false);
                }
                // item.$set('open',true);
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