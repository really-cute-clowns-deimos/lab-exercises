$( "#run" ).click(function() {
    $( "div:animated" ).toggleClass( "colored" );
});

function animateIt() {
    $( "#mover" ).slideToggle( "slow", animateIt );
}

animateIt();