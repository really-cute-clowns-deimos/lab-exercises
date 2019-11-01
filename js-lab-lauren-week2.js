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
            codeIndex++
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




