
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
    
    var isDown = false;

    $(document).on("mousedown", function() {
    	isDown = true;
    });

    $(document).on("mouseup", function() {
    	isDown = false;
    });


    $("#gridcontainer").on("mousemove", ".gridbox", function() {
        if (isDown){
        	$(this).css("background-color", getColor(red, green, blue));
        }
    });

    $("#gridcontainer").on("mousedown", ".gridbox", function() {
    	$(this).css("background-color", getColor(red, green, blue));
    });

    $("#clear").on("click", function() {
        $(".gridbox").css("background-color", "white")
    });

    $("#flood").on("click", function() {
        $(".gridbox").css("background-color", getColor(red, green, blue));
    });


    $("#red").on("change", function() {
        red = $(this).val()
        $("#currentcolor").css("background-color", getColor(red, green, blue));
    });
    
    $("#green").on("change", function() {
        green = $(this).val()
        $("#currentcolor").css("background-color", getColor(red, green, blue));
    });

    $("#blue").on("change", function() {
        blue = $(this).val()
        $("#currentcolor").css("background-color", getColor(red, green, blue));
    });
});