const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
$(".btn").on("click",function(){
    var hexColor = "#"
    
    for (var i = 1;i<7;i++){
        var randomNumber = Math.floor(Math.random()*(hex.length));
        hexColor+=hex[randomNumber]
    }
    console.log(hexColor)
    $("body").css("background-color",hexColor);
    $("span").text(hexColor);
})