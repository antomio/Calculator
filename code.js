function resetCalculator(curValue){
	$("#d").val(curValue);
	$(".function").removeClass("pendingFunction");
	$("#d").data("isPendingFunction", false); //tiiri css'am
	$("#d").data("thePendingFunction", "");
	$("#d").data("valueOneLocked", false);
	$("#d").data("valueTwoLocked", false);
	$("#d").data("valueOne", curValue);
	$("#d").data("valueTwo", 0);
	$("#d").data("fromPrevious", false);
}

(function($) {

	// $('.keys input[type="button"]').click(function(){
	//     $('#d input[type="text"]').val($(this).val());
	// });

	resetCalculator("0");

	$(".num").on("click", function() {
		if ($("#d").data("fromPrevious") == true){
			resetCalculator($(this).text());
		} else if (($("#d").data("isPendingFunction") == true) && 
			($("#d").data("valueOneLocked") == false)){
				$("#d").data("valueOne", $("#d").val());
				$("#d").data("valueOneLocked", true);
				$("#d").val($(this).text());
				$("#d").data("valueTwo", $("#d").val());
				$("#d").data("valueTwoLocked", true);

// Clicking a number AGAIN, after first number is locked and already there's a value for the second number

		} else if (($("#d").data("isPendingFunction") == true ) &&
			($("#d").data("valueOneLocked") == true)){

			var curValue = $("#d").val();
			var toAdd = $(this).text();
			var newValue = curValue + toAdd;

			$("#d").val(newValue);
			$("#d").data("valueTwo", $("#d").val());
			$("#d").data("valueTwoLocked", true);

// Clicking on a fresh number
	
		} else {
			var curValue = $("#d").val();
			if (curValue == "0") {
				curValue = "";
			}
			var toAdd = $(this).text();
			var newValue = curValue + toAdd;

			$("#d").val(newValue);
		}
	});

// 	$(".num").click(function() {
// 		if ($("#d").data("fromPrevious") == true){
// 			resetCalculator($(this).text());
// 		} else if (($("#d").data("isPendingFunction") == true) && 
// 			($("#d").data("valueOneLocked") == false)){
// 				$("#d").data("valueOne", $("#d").val());
// 				$("#d").data("valueOneLocked", true);
// 				$("#d").val($(this).text());
// 				$("#d").data("valueTwo", $("#d").val());
// 				$("#d").data("valueTwoLocked", true);

// // Clicking a number AGAIN, after first number is locked and already there's a value for the second number

// 		} else if (($("#d").data("isPendingFunction") == true ) &&
// 			($("#d").data("valueOneLocked") == true)){

// 			var curValue = $("#d").val();
// 			var toAdd = $(this).text();
// 			var newValue = curValue + toAdd;

// 			$("#d").val(newValue);
// 			$("#d").data("valueTwo", $("#d").val());
// 			$("#d").data("valueTwoLocked", true);

// // Clicking on a fresh number
	
// 		} else {
// 			var curValue = $("#d").val();
// 			if (curValue == "0") {
// 				curValue = "";
// 			}
// 			var toAdd = $(this).text();
// 			var newValue = curValue + toAdd;

// 			$("#d").val(newValue);
// 		}
// 	});

	$(".clear").click(function() {
		resetCalculator("0");
	});

	var equals = function() {
		if (($("#d").data("valueOneLocked") == true) &&
			($("#d").data("valueTwoLocked") == true)){

			if ($("#d").data("thePendingFunction") == "+"){
				var finalValue = parseFloat($("#d").data("valueOne")) + 
				parseFloat($("#d").data("valueTwo"));
			} else if ($("#d").data("thePendingFunction") == "-") {
				var finalValue = parseFloat($("#d").data("valueOne")) - 
				parseFloat($("#d").data("valueTwo"));
			} else if ($("#d").data("thePendingFunction") == "*") {
				var finalValue = parseFloat($("#d").data("valueOne")) * 
				parseFloat($("#d").data("valueTwo"));
			} else if ($("#d").data("thePendingFunction") == "/") {
				var finalValue = parseFloat($("#d").data("valueOne")) / 
				parseFloat($("#d").data("valueTwo"));
			}

			$("#d").val(finalValue);

			resetCalculator(finalValue);
			$("#d").data("fromPrevious", true);
		} else {
			//both numbers are NOT locked. do nothing.
		}
	};

	$(".equals").click(equals);

	$(".function").click(function() {
		equals();
		if ($("#d").data("fromPrevious") == true){
			resetCalculator($("#d").val());
			$("#d").data("valueOneLocked", false);
			$("#d").data("fromPrevious", false);
		}
// Let it be known that a function has been selected
		var pendingFunction = $(this).text();
		$("#d").data("isPendingFunction", true);
		$("#d").data("thePendingFunction", pendingFunction);
// Visually represent the current function
		$(".function").removeClass("pendingFunction");
		$(this).addClass("pendingFunction");


	});

})(jQuery);

// var sum = function (x, y) {
// 	return x + y;
// };

// var x = sum(5, 6);