



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


    $("#gridcontainer").on("mousemove", "div", function() {
        if (isDown){
        	$(this).addClass("entered");
            $(this).css("background-color", "rgb(" + red + "," + green +"," + blue + ")");
        }
    });

    $("#gridcontainer").on("mousedown", "div", function() {
    	$(this).addClass("entered");
        $(this).css("background-color", "rgb(" + red + "," + green +"," + blue + ")");
    });

    $("button").on("click", function() {
        $(".entered").css("background-color", "#ffffff")
    	$("div").removeClass("entered");
    });


    $("#red").on("change", function() {
        red = $(this).val()
        $("#currentcolor").css("background-color", "rgb(" + red + "," + green +"," + blue + ")");
    });
    
    $("#green").on("change", function() {
        green = $(this).val()
        $("#currentcolor").css("background-color", "rgb(" + red + "," + green +"," + blue + ")");
    });

    $("#blue").on("change", function() {
        blue = $(this).val()
        $("#currentcolor").css("background-color", "rgb(" + red + "," + green +"," + blue + ")");
    });
});