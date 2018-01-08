$(function() {
    $(".mainAnim4").on("click",function(e) {
        e.preventDefault();
        $(".cloudArea").hide("fade");
        $("#"+this.id+"div").show();
    });
});