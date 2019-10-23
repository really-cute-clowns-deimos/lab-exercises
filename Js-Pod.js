// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//     Example Input:

   var users = [
        {
            isAdmin: true,
            email: 'user1@email.com'
        },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
        {
            isAdmin: false,
            email: 'user3@email.com'
        }
    ];


function adminList(x) {
    var z = [];
    x.forEach(function (y, index) {
        if (x[index].isAdmin === true){
            z.push(y);
        }
    });
    console.log(z);
}

console.log(adminList(users));


// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     Example Input:

    var breads  = [
        "white",
        "wheat",
        "rhy",
        "white"
    ];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];


//
// function makeSandwichObjects(x,y) {
//     var z = [{},{},{},{}];
//     x.forEach(function (a, index) {
//         z[index].bread = a, index;
//     });
//
//     y.forEach(function (b,index) {
//         z[index].filling = b, index;
//     });
//     console.log(z);
//
// }
// console.log(makeSandwichObjects(breads, fillings));

//
//
// function my_Clock()
// {
//     this.cur_date = new Date();
//     this.hours = this.cur_date.getHours();
//     this.minutes = this.cur_date.getMinutes();
//     this.seconds = this.cur_date.getSeconds();
// }
// my_Clock.prototype.run = function ()
// {
//     setInterval(this.update.bind(this), 1000);
// };
// my_Clock.prototype.update = function ()
// {
//     this.updateTime(1);
//     console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
// };
// my_Clock.prototype.updateTime = function (secs)
// {
//     this.seconds+= secs;
//     if (this.seconds >= 60)
//     {
//         this.minutes++;
//         this.seconds= 0;
//     }
//     if (this.minutes >= 60)
//     {
//         this.hours++;
//         this.minutes=0;
//     }
//     if (this.hours >= 24)
//     {
//         this.hours = 0;
//     }
// };
// var clock = new my_Clock();
// clock.run();
