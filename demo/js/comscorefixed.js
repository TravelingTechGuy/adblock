$(function() {
	if(!!window.COMSCORE) {
		COMSCORE.beacon({
			c1:2,
			c2:6036210,
			c3:"",
			c4:"",
			c5:"",
			c6:"",
			c15:""
		});
	}
	else {
		console.log('COMSCORE blocked by user');
	}
	
    $('#add').on('click', function() {
        var a = parseInt($("#a").val());
        var b = parseInt($("#b").val());
        var result = a + b;
        $("#result").val(result);
    });
});