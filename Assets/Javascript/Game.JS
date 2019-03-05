var randomResult;
var lost;
var win;
var previous = 0;

$(".crystal").attr("class", "red");

randomResult= Math.floor(Math.random() * 120) + 12;

$("#result").html("Random Result: " + randomResult);
for (var i = 0; i < 4; i++){

    var random = Math.floor (Math.random() * 11) +1;

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".crystals").append(crystal);
}

$(".crystal").on("click", function (){

    var num = parseInt($(this).attr("data-random"));

    previous += num  

    // var num = $(this).attr("data-random");

    // result += Number;



});


// 4 crystals
// Every crystal has a random value
// Random value to achieve