



$(document).ready(function() {
    
    for (i = 0; i < 16; i++) {
    	for(j = 0; j < 16; j++){
    	    $("#gridcontainer").append($("<div></div>"));
    	}
    }


    var isDown = false;

    $("body").on("mousedown", function() {
    	isDown = true;
    });

    $("body").on("mouseup", function() {
    	isDown = false;
    });


    $("div").on("mousemove", function() {
        if (isDown){
        	$(this).addClass("entered");
        }
    });

    $("div").on("mousedown", function() {
    	$(this).addClass("entered");

    });

    $("button").on("click", function() {
    	$("div").removeClass("entered");
    });

});