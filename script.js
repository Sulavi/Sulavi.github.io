$(document).ready(function(){
	$('#menu').menu();
	$('#toolbar').buttonset();
	
	$("#games").on({
		click: function(){
			$('#menu').show();
			return false;
		},
		blur: function(){
			$('#menu').hide();
		}
	});
});

