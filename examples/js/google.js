$(function() {
    $('#add').on('click', function() {
        var a = parseInt($("#a").val());
        var b = parseInt($("#b").val());
        var result = a + b;

        //send result to Google Analytics
        ga('send', {
	  		'hitType': 'event',          // Required.
	  		'eventCategory': 'button',   // Required.
	  		'eventAction': 'click',      // Required.
	  		'eventLabel': 'calculate result',
	  		'eventValue': result
		});
        
        $("#result").val(result);
    });
});
