"use strict";
//rock paper scissors
//Each game is represented by an array of length 2, where the first element represents what Abigail played
// and the second element represents what Benson played.

//r stands for rock, p stand for paper, s stand for scissors
//ex.
    // calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"
    //
    // // Ben wins the first game (Paper beats Rock).
    // // Abigail wins the second game (Rock beats Scissors).
    // // Abigail wins the third game (Scissors beats Paper).
    // // Abigail wins 2/3.
    //
    // calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"
    //
    // calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"