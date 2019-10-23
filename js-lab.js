(function () {
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


//Given an array of users, each defined by an object with the following properties:
// name, score, reputation
// create a function that sorts the array to form the correct leaderboard.

// The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community,
// so to get the trueScore, you should add the reputation multiplied by 2 to the score.

// Once you know the trueScore of each user, sort the array according to it in descending order.
    //ex. leaderboards([
    //     { name: "a", score: 100, reputation: 20 },
    // { name: "b", score: 90, reputation: 40 },
    // { name: "c", score: 110, reputation: 30 },
    // ]) ➞ [
    //     { name: "c", score: 115, reputation: 30 }, // trueScore = 175
    //     { name: "b", score: 90, reputation: 40 },  // trueScore = 170
    //     { name: "a", score: 100, reputation: 20 }  // trueScore = 140
    // ]
    var scores = [
        {
            name: "Joyce",
            score: 100,
            reputation: 20
        },
        {
            name: "Mike",
            score: 90,
            reputation: 40
        },
        {
            name: "Eleven",
            score: 110,
            reputation: 40
        },
        {
            name: "Hopper",
            score: 70,
            reputation: 20
        },
    ];


    function leaderboards(arrayOfScores) {

        for(var i = 0; i < scores.length; i++){
            //var repScore = arrayOfScores[i].reputation * 2;
            var trueScore = (arrayOfScores[i].reputation * 2) + arrayOfScores[i].score;
            console.log(arrayOfScores[i].name + ": " + trueScore)
        }

        //Researched Online, found this, works but don't really know why
        var sortedArray = arrayOfScores.sort((a, b) => (a.reputation * 2 + a.score < b.reputation * 2 + b.score) ? 1 : -1);

        console.log("returning array");
        return sortedArray;
    }


    console.log(leaderboards(scores));


//Create a dog object
// The dog object should have properties for:
// breed (string),
// weightInPounds (number),
// age (number),
// color (string),
// sterilized (boolean),
// shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
// bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot
    //with the current date to the shotRecords array
    var dog =
        {
            breed: "lab",
            weightInPounds: 80,
            age: 2,
            color: "golden",
            sterilized: false,
            shotRecords: [{
                date: "Jan 20, 2016",
                typeOfShot: "puppy"
            }]
        };

    dog.bark = function() {
        console.log("woof");
    };

    dog.getOlder = function(){
        return ++dog.age;   //++ goes before age, so it updates first
    };

    dog.fix = function() {
        if (dog.sterilized == false){
            dog.sterilized = true;
        }
        else{
            //do nothing
        }

    };

    dog.vaccinate = function(newShot){
        dog.shotRecords.push(
            {
                date:"Oct 22, 2019",
                typeOfShot: newShot
            });
    };

    console.log(dog);
    dog.bark();
    console.log(dog.getOlder());
    dog.fix();
    console.log(dog);
    dog.vaccinate("Gomez Shot")
    console.log(dog);


})()


