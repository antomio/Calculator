(function($) {
	$('.keys input[type="button"]').click(function(){
	    $('.display input[type="text"]').val($(this).val());
	});
})(jQuery);

