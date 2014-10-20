



$(document).ready(function() {
    
    for (i = 0; i < 16; i++) {
    	for(j = 0; j < 16; j++){
    	    $("#gridcontainer").append($("<div></div>"));
    	}
    }


    var isDown = false;

    $(document).on("mousedown", function() {
    	isDown = true;
    });

    $(document).on("mouseup", function() {
    	isDown = false;
    });


    $("#gridcontainer").on("mousemove", "div", function() {
        if (isDown){
        	$(this).addClass("entered");
        }
    });

    $("#gridcontainer").on("mousedown", "div", function() {
    	$(this).addClass("entered");

    });

    $("button").on("click", function() {
    	$("div").removeClass("entered");
    });

});