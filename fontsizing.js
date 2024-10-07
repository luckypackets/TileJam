$("input[type=submit]").click(function(){
    var fontSize = $("input[type=number]").val();
    $("span").css({"font-size":fontSize+"cqw"});
});

