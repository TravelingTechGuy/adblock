$(function() {
    $('#add').on('click', function() {
    	mktoMunchkin("017-HGS-593");
        var a = parseInt($("#a").val());
        var b = parseInt($("#b").val());
        var result = a + b;
        
        $("#result").val(result);
    });
});
