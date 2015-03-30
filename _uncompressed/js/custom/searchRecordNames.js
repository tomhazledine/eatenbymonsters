// Namespace rnl_ = Record Names List

var rnl_wrapper = $('.rnl_output');
var rnl_searchInput = $('#rnl_searchInput')
var bandList = 'empty';
var rnl_loader = $('.loadingImage');

// If there is a "band list" element on the page...
if (rnl_wrapper.length){
    
    // Load the un-filtered AJAX results
    rnl_getStartList();

    // When a key is released in the search box...
    rnl_searchInput.keyup(function(){
        // Get the search term
        var rnl_term = rnl_searchInput.val();
        // Parse that through a regex to make in case-insensitive
        window.rnl_termExp = new RegExp(rnl_term, "i");
        // Feed the search term into the AJAX function
        rnl_getResults(rnl_termExp);
    });

}

// Get the Band List data initially
function rnl_getStartList(){
    $.getJSON('/searchrecords.json', function(data){
        rnl_layout(data,"");
    })
    .always(function(){
        // Hide the loading image when complete
        rnl_loader.addClass('hidden');
    });
}

// Get the Band List data when there is a Search Term
function rnl_getResults(term){
    // Show the loading image when AJAX starts
    rnl_loader.removeClass('hidden');
    var initialLoad = $.getJSON('/searchrecords.json', function(data){
        rnl_layout(data,term);
    })
    .always(function(){
        // Hide the loading image when complete
        rnl_loader.addClass('hidden');
    });
}

// Parse the data array into HTML and inject it into the DOM
function rnl_layout(array,term){
    
    // Rebuild array with search filtering
    
    rnl_length = array.length;
    output = '<ul class="rnl_results">';
    for (var i = 0; i < rnl_length; i++) {
        rnl_name = array[i].recordTitle;
        // Check array.name against the search term
        if (rnl_name.search(term) != -1) {
            // Build the <li> entries:
            output += '<li>';
            output += '<a class="rnl_entry" href="' + array[i].url + '">';
            output += '<span class="rnl_title"><em>' + rnl_name + '</em></span>';
            output += '</a>';
            output += '<span class="bandName"> by <strong>';
            
            // Count how many bands the post has
            var bandNumber = array[i].bands.length;

            if (bandNumber > 1 ) {
                // If there's more than 1 band, loop through them as join with ", & "
                for (var i2 = 0; i2 < bandNumber; i2++) {
                    output += array[i].bands[i2].band;
                    if ((i2+2) != bandNumber && (i2+2) < bandNumber) {
                        output += ', ';
                    } else if ((i2+1) != bandNumber && (i2+1) < bandNumber) {
                        output += ', </strong>and<strong> ';
                    }
                }
            } else {
                output += array[i].bands[0].band;
            }

            output += '</strong></span>';
            output += '<div class="rnl_linksWrapper closed"></div>';
            output += '</li>';
        }
    }
    output += '</ul>';
    // Place "output" string as HTML into the page
    rnl_wrapper.html(output);
    rnl_noSearch();
}

// Check if the search has returned nothing
function rnl_noSearch(){
    var rnl_resultNum = $('.rnl_results li').length;
    if (rnl_resultNum < 1) {
        var nullOutput = '<h4>No results. Try searching for something different.</h4>'
        rnl_wrapper.html(nullOutput);
    }
}