var randomResult;
var lost;
var win;

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


// 4 crystals
// Every crystal has a random value
// Random value to achieve