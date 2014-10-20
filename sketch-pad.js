



$(document).ready(function() {
    
    for (i = 0; i < 16; i++) {
    	for(j = 0; j < 16; j++){
    	    $("#gridcontainer").append($("<div></div>"));
    	}
    }

    $("div").on("mouseenter", function() {
        $(this).addClass("entered");
    });

});