function resetCalculator(curValue){
	$(".display").val(curValue);
	$(".function").removeClass("pendingFunction");
	$(".display").data("isPendingFunction", false); //tiiri css'am
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
			var newValue = curValue + toAdd;

			$(".display").val(newValue);
			$(".display").data("valueTwo", $(".display").val());
			$(".display").data("valueTwoLocked", true);

// Clicking on a fresh number
	
		} else {
			var curValue = $(".display").val();
			if (curValue == "0") {
				curValue = "";
			}
			var toAdd = $(this).text();
			var newValue = curValue + toAdd;

			$(".display").val(newValue);
		}
	});

	$(".clear").click(function() {
		resetCalculator("0");
	});

	$(".equals").click(function() {
		if (($(".display").data("valueOneLocked") == true) &&
			($(".display").data("valueTwoLocked") == true)){

			if ($(".display").data("thePendingFunction") == ""){
				var finalValue = parseFloat($(".display").data("valueOne")) + 
				parseFloat($(".display").data("valueTwo"));
			} else if ($(".display").data("thePendingFunction") + 
				parseFloat($(".display").data("valueTwo")))

				var finalValue = parseFloat($(".display").data("valueOne")) + 
				parseFloat($(".display").data("valueTwo"));
		}
	});

	$(".function").click(function() {
		if ($(".display").data("fromPrevious") == true){
			resetCalculator($("".display).val());
			$(".display").data("valueOneLocked", false);
			$(".display").data("fromPrevious", false);
		}
// Let it be known that a function has been selected
		var pendingFunction = $(this).text();
		$(".display").data("isPendingFunction", true);
		$(".display").data("thePendingFunction", pendingFunction);
// Visually represent the current function
		$(".function").removeClass("pendingFunction");
		$(this).addClass("pendingFunction");


	});

})(jQuery);

// var sum = function (x, y) {
// 	return x + y;
// };

// var x = sum(5, 6);