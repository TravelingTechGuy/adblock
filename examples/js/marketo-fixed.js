$(function() {
    $('#add').on('click', function() {
    	//check for existense of Marketo object
    	if(!!window.mktoMunchkin) {
			mktoMunchkin("017-HGS-593");
		}
		else {
			console.log('Marketo blocked by user');
		}

        var a = parseInt($("#a").val());
        var b = parseInt($("#b").val());
        var result = a + b;
        $("#result").val(result);
    });
});