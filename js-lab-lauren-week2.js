"use strict";

//create an array to hold piano
var pianoSong = [80, 76, 65, 89];

//create a variable to hold the current index as we read through array
var codeIndex = 0;

$(document).keydown(function (event) {
    //which is the key(the number from the keyboard)
    console.log(event.which);

    if (event.which === 80) {
        if (pianoSong[codeIndex] === 80) {
            codeIndex++;
            console.log("P");
        } else {
            codeIndex = 0;
            console.log("oops you messed up");
        }
    } else if (event.which === 76) {
        if (pianoSong[codeIndex] === 76) {
            codeIndex++;
            console.log("L");
        } else {
            codeIndex = 0;
            console.log("oops you messed up");
        }
    } else if (event.which === 65) {
        if (pianoSong[codeIndex] === 65) {
            codeIndex++;
            console.log("A");
        } else {
            codeIndex = 0;
            console.log("oops you messed up");
        }
    } else if (event.which === 89) {
        if (pianoSong[codeIndex] === 89) {
            codeIndex++;
            console.log("Y");
        } else {
            codeIndex = 0;
            console.log("oops you messed up");
        }
    }

//reads this when they completed the play code
    if (codeIndex === pianoSong.length) {
        success();
    }
});
//function that is called when user types in play
var audio;

function success() {
    console.log("you entered the Play Code!");
    audio = new Audio('audio/piano.wav');
    audio.play();
        codeIndex = 0;

};

//when you click on the dog so that it spins
$(function() {
    //set doggo id of the element to var dog
    var dog = $('#doggo');
    var doggoHeader = $('h2');

    dog.click(function(){
        //$this makes the element into a jquery object so that you can use jquery methods (like data)
        var doggoo = $(this);
        //.data is used to attach data to, get info from selected elements


        //checks if rotating is true, if it is then when you click it will stop
        if(doggoo.data('rotating')){
            doggoHeader.text("Click the Doggo").css('font-family','Just Another Hand', 'cursive').css('font-size','40px').css('color', 'white');
            //clearInterval clears the timer that was set when it first started spinning
            clearInterval(doggoo.data('rotating'));
            //after clearing, set rotating(key) = false(value)
            doggoo.data('rotating', false)
        }

        //start spinning the image
        else {

            doggoHeader.text('Party Time!!').css('font-family', 'Faster One', 'cursive').css('font-size','60px').css('color', '#0F3CFF');
            //setInterval is used as the parameter for the clearInterval
            doggoo.data('rotating', setInterval(function(){

                //set degreeIncrement to either the value of degree or zero
                var degreeIncrement = doggoo.data('degreeKey') || 0;

                //update css to transform the image (deg is degrees)
                doggoo.css({ transform: 'rotate(' + degreeIncrement + 'deg)'});

                //update the degreeKey's value by incrementing the degreeIncrement(value) variable
                doggoo.data('degreeKey', ++degreeIncrement)

                //the timeout creates a loop, causing the above code (the 'else') runs every 5 milliseconds
            }, 5));
        }
    });

});



//for the buttons to show and hide the ipsums
$(document).ready(function() {
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function() {
        $("p").show();
    })
});

$('p').css('font-family','Just Another Hand', 'cursive').css('font-size','40px');
