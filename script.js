$(document).ready(function(){
	$('#menu').menu();
	$('#toolbar').buttonset();
	
	// function callback() {
      // setTimeout(function() {
        // $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      // }, 1000 );
    // };
	
	// $("#games").click(function(){
		// $('#menu').show();
		// return false;
	// });
	// $("#games").blur(function(){
		// $('#menu').hide();
	// });

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

