
getColor = function(red, green, blue) {
    return "rgb(" + red + "," + green +"," + blue + ")"
}


$(document).ready(function() {
    
    for (i = 0; i < 16; i++) {
    	for(j = 0; j < 16; j++){
    	    $("#gridcontainer").append($("<div class='gridbox'></div>"));
    	}
    }

    var red = 0;
    var green = 0;
    var blue = 0;
    var color = getColor(red, green, blue);
    
    var isDown = false;

    $(document).on("mousedown", function() {
    	isDown = true;
    });

    $(document).on("mouseup", function() {
    	isDown = false;
    });


    $("#gridcontainer").on("mousemove", ".gridbox", function() {
        if (isDown){
        	$(this).css("background-color", color);
        }
    });

    $("#gridcontainer").on("mousedown", ".gridbox", function() {
    	$(this).css("background-color", color);
    });


    $("#clear").on("click", function() {
        $(".gridbox").css("background-color", "white");
    });

    $("#flood").on("click", function() {
        $(".gridbox").css("background-color", color);
    });


    $("#red").on("change", function() {
        red = $(this).val();
        color = getColor(red, green, blue);
        $("#currentcolor").css("background-color", color);
    });
    
    $("#green").on("change", function() {
        green = $(this).val();
        color = getColor(red, green, blue);
        $("#currentcolor").css("background-color", color);
    });

    $("#blue").on("change", function() {
        blue = $(this).val();
        color = getColor(red, green, blue);
        $("#currentcolor").css("background-color", color);
    });
});