function resetCalculator(curValue){
	$(".display").val(curValue);
	$(".function").removeClass("pendingFunction");
	$(".display").data("isPendingFunction", false);
	$(".display").data("thePendingFunction", "");
	$(".display").data("valueOneLocked", false);
	$(".display").data("valueTwoLocked", false);
	$(".display").data("valueOne", curValue);
	$(".display").data("valueTwo", 0);
	$(".display").data("fromPrevious", false);
}

(function($) {

	// $('.keys input[type="button"]').click(function(){
	//     $('.display input[type="text"]').val($(this).val());
	// });

	$(".num").click(function() {
		if ($(".display").data("fromPrevious") == true){
			resetCalculator($(this).text());
		} else if (($(".display").data("isPendingFunction") == true) && 
			($(".display").data("valueOneLocked") == false)){
				$(".display").data("valueOne", $(".display").val());
				$(".display").data("valueOneLocked", true);
				$(".display").val($(this).text());
				$(".display").data("valueTwo", $(".display").val());
				$(".display").data("valueTwoLocked", true);

// Clicking a number AGAIN, after first number is locked and already there's a value for the second number

		} else if (($(".display").data("isPendingFunction") == true ) &&
			($(".display").data("valueOneLocked") == true)){

			var curValue = $(".display").val();
			var toAdd = $(this).text();
			
		}
	});

	$(".clear").click(function() {
		resetCalculator("0");
	});

	$(".equals").click(function() {
		//do stuff
	});

	$(".function").click(function() {
		//do stuff
	});

})(jQuery);

