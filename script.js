$("button").click(function() {
    var username = $(".name").val();
    var game = $(".game").val();
    var hours = parseInt($(".hours").val());
    console.log(username + game + hours);
 $(".message").text(username + " by the year 2045 you will have played/watched " + hours*1352 + " hours of "+game);
});