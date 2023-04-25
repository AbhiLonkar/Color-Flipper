var color = ["violet","indigo","blue","green","yellow","orange","red"]
$("button").on("click",function(){
    var randomNumber = Math.floor(Math.random()*8);
    var randomColor = color[randomNumber]
    $("body").css("background-color",randomColor);
    $("span").text(randomColor)
})
