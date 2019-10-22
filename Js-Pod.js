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
    var z = 0;
    x.forEach(function (y) {
        if (y.isAdmin === true){
            return z + 1;
        }
    })
}
console.log(adminList(users));
// Example Output (before refactor): 2
//
// Example Output (after 1st refactor):
//
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor):
//
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]


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

// makeSandwhichObjects(breads, fillings)
// Example Output:
//
//     [
//         {
//             bread: "white,
//             filling: "pb&j"
//         },
//         {
//             bread: "wheat",
//             filling: "ham"
//         },
//         {
//             bread: "rhy",
//             filling: "cheese steak"
//         },
//         {
//             bread: "white",
//             filling: "tuna"
//         }
//     ]