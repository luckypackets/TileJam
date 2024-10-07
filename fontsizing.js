$("input[type=number]").change(function(){
    var fontSize = $(this).val();
    $("span").css({"font-size":fontSize+"cqw"});
});
