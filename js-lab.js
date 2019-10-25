(function () {
    "use strict";
 //Create a function that takes in an array of miles run every saturday and returns runners total number of progress days
    //track the number of miles run every saturday and if it is more than the previous run call it a progress day
        //not a progress day if new number of miles is the same as previous week
    //should return the number of progress days that runner had

    //Create variables to hold html elements
    var milesRun = document.querySelector("#miles");
    var addButton = document.querySelector('#addButton');
    var calculateButton = document.querySelector("#calculate");
    var result = document.querySelector("#result");

    //Create an empty array to hold all the miles entered
    var milesRan = [];
    var progressDay = 0;

    //Add event listeners for buttons
    addButton.addEventListener('click', addMilesToArray);
    calculateButton.addEventListener('click', calculateProgressDays);


    //creates html and places it on the page
    function renderProgress() {
        var html = '<p> Your had ' + progressDay + ' progress day(s) </p>'
        result.innerHTML = html;

        //clear miles array to start over
        clearMilesRan()

    }
    //resets milesRan array to empty
    function clearMilesRan(){
        milesRan = [];
    }

    //function that adds miles from user to an array
    function addMilesToArray(e) {
        e.preventDefault();
        //create empty array


        //get the value from the box
        var saturdayMiles = milesRun.value;

        //need to add error message for invalid input before entering to the array

        //add value to the array
        milesRan.push(saturdayMiles)
        console.log('start');
        console.log(saturdayMiles);
        console.log(milesRan);
    }

    //This function calculate how many "progress days" you have
    function calculateProgressDays() {
        //scan the array and determine progress days
        for (var i = 0; i < milesRan.length -1; i++ ) {
            if (milesRan[i] < milesRan[i + 1]) {
                progressDay++
            }
        }

        console.log(progressDay);
        //call the html render to show results
        renderProgress();

    }



//Given an array of users, each defined by an object with the following properties: name, score, reputation
// create a function that sorts the array to form the correct leaderboard.
// so to get the trueScore, you should add the reputation multiplied by 2 to the score.

// Once you know the trueScore of each user, sort the array according to it in descending order.

    //create an array of objects
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

    //Sorts the area of objects based on their true score
    function leaderboards(arrayOfScores) {
         arrayOfScores.sort(function (a,b) {

             //truescore = reputation *2 + score
             var aTrueScore = (a.reputation * 2 ) + a.score;
             var bTrueScore = (b.reputation * 2 ) + b.score;

             //this return sorts the scores in the function (sort)
             return bTrueScore - aTrueScore;

         });
        //need this return to actually see the objects sorted (leaderboards)
        return arrayOfScores


    }

    console.log(leaderboards(scores));

//Create a dog object
// The dog object should have properties for: breed (string),weightInPounds (number),age (number),color (string),
// sterilized (boolean),shotRecords (array of objects with properties for date and typeOfShot)

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
            }],
            bark: function (typeOfBark) {
                return "Woof";
            },
            getOlder: function(){
                return ++dog.age;   //++ goes before age, so it updates first
            },
            fix: function() {
                if (dog.sterilized == false){
                    dog.sterilized = true;
                }
                else{
                    //do nothing
                }

            },
            vaccinate: function(newShot){
                dog.shotRecords.push(
                    {
                        date:"Oct 22, 2019",
                        typeOfShot: newShot
                    });
            }

        };
    console.log(dog);
    console.log(dog.bark());
    console.log(dog.getOlder());
    dog.fix();
    dog.vaccinate("Gomez");
    console.log(dog);

})();

