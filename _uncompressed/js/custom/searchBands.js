// Namespace bl_ = Band List

var bl_wrapper = $('.bl_output');
var bl_searchInput = $('#bl_searchInput')
var bandList = 'empty';
var bl_loader = $('.loadingImage');

// If there is a "record names list" element on the page...
if (bl_wrapper.length){
    
    // Load the un-filtered AJAX results
    bl_getStartList();

    // When a key is released in the search box...
    bl_searchInput.keyup(function(){
        // Get the search term
        var bl_term = bl_searchInput.val();
        // Parse that through a regex to make in case-insensitive
        window.bl_termExp = new RegExp(bl_term, "i");
        // Feed the search term into the AJAX function
        bl_getResults(bl_termExp);
    });

}

// Get the Band List data initially
function bl_getStartList(){
    $.getJSON('/searchbands.json', function(data){
        bl_layout(data,"");
    })
    .always(function(){
        // Hide the loading image when complete
        bl_loader.addClass('hidden');
    });
}

// Get the Band List data when there is a Search Term
function bl_getResults(term){
    // Show the loading image when AJAX starts
    bl_loader.removeClass('hidden');
    var initialLoad = $.getJSON('/searchbands.json', function(data){
        bl_layout(data,term);
    })
    .always(function(){
        // Hide the loading image when complete
        bl_loader.addClass('hidden');
    });
}

// Parse the data array into HTML and inject it into the DOM
function bl_layout(array,term){
    
    // Rebuild array with search filtering
    
    bl_length = array.length;

    output = '<ul class="bl_results">';
    for (var i = 0; i < bl_length; i++) {
        // console.log(array[i]);
        bl_band = array[i].band;
        // Check array.name against the search term
        if (bl_band.search(term) != -1) {
            // Build the <li> entries:
            output += '<li>';
            output += bl_band;
            output += '<ul>';
            
            // Count how many posts the band has
            var postNumber = array[i].posts.length;
            // Loop through them as join with ", & "
            for (var i2 = 0; i2 < postNumber; i2++) {
                output += '<li> – ';
                output += '<a href="';
                output += array[i].posts[i2].link;
                output += '">';
                output += array[i].posts[i2].recordTitle;
                output += '</a>';
                output += '</li>';
            }
            output += '</ul>';
            output += '</li>';
        }
    }
    output += '</ul>';
    // Place "output" string as HTML into the page
    bl_wrapper.html(output);
    bl_noSearch();
}

// Check if the search has returned nothing
function bl_noSearch(){
    var bl_resultNum = $('.bl_results li').length;
    if (bl_resultNum < 1) {
        var nullOutput = '<h4>No results. Try searching for something different.</h4>'
        bl_wrapper.html(nullOutput);
    }
}