// Write a function, adminList() that takes in an array of user objects and return an array of user objects that are admins.
//
//
//
//    var users = [
//         {
//             isAdmin: true,
//             email: 'user1@email.com'
//         },
//         {
//             isAdmin: true,
//             email: 'user2@email.com'
//         },
//         {
//             isAdmin: false,
//             email: 'user3@email.com'
//         }
//     ];
//
//
// function adminList(x) {
//     var z = [];
//     x.forEach(function (y, index) {
//         if (x[index].isAdmin === true){
//             z.push(y);
//         }
//     });
//     return z;
// }
//
// console.log(adminList(users));
//
//
// // Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
// //
// //
//
//     var breads  = [
//         "white",
//         "wheat",
//         "rhy",
//         "white",
//         "wheat"
//     ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna",
//     "jelly"
// ];
//
// function makeSandwichObject(breads, fillings) {
//     var arr = [];
//     for (var i = 0; i < breads.length; i++) {
//         var obj = {};
//         obj.bread = breads[i];
//         arr.push(obj);
//     }
//     fillings.forEach(function (b, index) {
//         arr[index].filling = b, index;
//     });
//     return arr;
// }
// console.log(makeSandwichObject(breads,fillings));
//
//
//
//
//
//  function isWeekend(date1){
//     var dt = new Date(date1);
//
//     if(dt.getDay() == 6 || dt.getDay() == 0)
//     {
//         return "weekend";
//     } else {
//         return "weekday";
//     }
// }
// console.log(isWeekend('Nov 15, 2014'));
// console.log(isWeekend('Nov 16, 2014'));
// console.log(isWeekend('Nov 17, 2014'));

//  second week!!!!

// 1 - for week 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function my_Clock() {
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}

my_Clock.prototype.run = function () {
    setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function () {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

my_Clock.prototype.updateTime = function (secs) {
    this.seconds+= secs;
    if (this.seconds >= 60) {
        this.minutes++;
        this.seconds= 0;
    }
    if (this.minutes >= 60) {
        this.hours++;
        this.minutes=0;
    }
    if (this.hours >= 24) {
        this.hours = 0;
    }

};
var clock = new my_Clock();
clock.run();


// 2 - for week 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function display_random_image()
{
    var images = [{
        src: "img/axisdeer.jpg",
        width: "500",
        height: "350"
    }, {
        src: "img/whitetaildeer.jpg",
        width: "500",
        height: "350"
    }, {
        src: "img/elk.jpg",
        width: "500",
        height: "350"
    }];

    var bucket = [];
    for (var i = 0, j = images.length; i < j; i++) {
        bucket[i] = new Image();
        bucket[i].src = images[i].src;
        bucket[i].width = images[i].width;
        bucket[i].height = images[i].height;
    }

// create random image number
    function getRandomInt(min,max)
    {
        //  return Math.floor(Math.random() * (max - min + 1)) + min;

        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return bucket[imn];
    }

// 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, bucket.length - 1);

// remove the previous images
    var getImages = document.getElementsByTagName('img');
    var l = getImages.length;
    for (var p = 0; p < l; p++) {
        getImages[0].parentNode.removeChild(getImages[0]);
    }
// display the image
    document.body.appendChild(newImage);
}


// 3 for week 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

