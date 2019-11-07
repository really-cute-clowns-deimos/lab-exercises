//make the boxes move up and down
    $( "#submit" ).click(function() {
        $( "div:animated" ).toggleClass( "colored" );
    });

//mover is the box that is going to move
    function animateIt() {
        $( ".mover" ).slideToggle( "slow", animateIt );
    }

    animateIt();

//to make the single box animate
$(document).ready(function () {
    $('#animate').click(function () {
        $('.box')
            .animate({width: "200px"})
            .animate({height: "200px"})
            .animate({marginLeft: "160px"})
            .animate({width: "200px"})
            .animate({borderWidth: "10px"})
            .animate({opacity: 0.5})
    })
});
