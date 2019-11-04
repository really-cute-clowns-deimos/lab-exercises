$( "#submit" ).click(function() {
    $( "div:animated" ).toggleClass( "colored" );
});

//mover is the box that is going to move
function animateIt() {
    $( ".mover" ).slideToggle( "slow", animateIt );
}

animateIt();