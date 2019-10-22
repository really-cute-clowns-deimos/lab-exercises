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


function makeSandwichObjects(x,y) {
    var z = [{},{},{},{}];
    x.forEach(function (a, index) {
        z[index].bread = a, index;
    });
    y.forEach(function (b,index) {
        z[index].filling = b, index;
    });
    console.log(z);
}
console.log(makeSandwichObjects(breads, fillings));


