$(function() {
    $('#add').on('click', function() {
        var a = parseInt($("#a").val());
        var b = parseInt($("#b").val());
        var result = a + b;
        $("#result").val(result);
    });
});
