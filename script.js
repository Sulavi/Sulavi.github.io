$(document).ready(function(){
	$('#menu').menu();
	$('#toolbar').buttonset();
	
	$("#about").on({
		click: function(){
			window.location.href="about.html";
		},
		blur: function(){
			$('#menu').hide();
		}
	});
});