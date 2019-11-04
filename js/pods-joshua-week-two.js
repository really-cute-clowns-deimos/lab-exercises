// window.onload = function() {
//     alert( 'The page has finished loading!' );
// };


$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );
});

$('.nav-wrapper').css('background-color', '#6EA4B3');

$('.codeup').css('border','2px solid black');
$('.codeup').css('box-shadow','1px 2px 4px 1px');

// LI HOVER TO RED + CHANGE TEXT TO WHITE
$('li').hover(
    function() {
        $(this).css('background-color', 'red').css('-webkit-transition', '1s').css('color', 'white');
        // $(this).css('text-color', 'white').css('-webkit-transition', '2s');
    },
    function() {
        $(this).css('background-color', '#6EA4B3').css('-webkit-transition', '1s').css('color', 'black');
        // $(this).css('text-color', 'black').css('-webkit-transition', '2s');
    }
);
// CLICK CLASS AND EXPAND TO CLASS TYPE
// $('#tank-list').hide();
// $('#tank-toggle').click(function() {
//     $('#tank-list').slideToggle();
// });
// $('#melee-list').hide();
// $('#melee-toggle').click(function() {
//     $('#melee-list').slideToggle();
// });
// $('#support-healer-list').hide();
// $('#support-healer-toggle').click(function() {
//     $('#support-healer-list').slideToggle();
// });
// $('#offensive-caster-list').hide();
// $('#offensive-caster-toggle').click(function() {
//     $('#offensive-caster-list').slideToggle();
// });
// $('#ranged-list').hide();
// $('#ranged-toggle').click(function() {
//     $('#ranged-list').slideToggle();
// });
$('li').each(function(){
    $(this).children().hide();
    $(this).click(function(){
        $(this).css('font-size','30px');
        $(this).children().slideToggle();
        $(this).click(function(){
            $(this).css('font-size','20px');
        });
    });
});



$('li').css('font-size','20px');
$('li').css('text-align','center');
$('ul').css('list-style', 'none');


$('h1').click(function() {
    $(this).css('background-color', '#6EA4B3').css('-webkit-transition', '2s');

});
$('h1').css('font-size', '50px');
$('h3').css('font-size', '30px');
$('h5').css('font-size', '20px');
$('h1').css('text-align', 'center');
$('h3').css('text-align', 'center');
$('h5').css('text-align', 'center');

$('#class-bottom-div').css('background-color','#6EA4B3');
$('#class-middle-div').css('background-color','#6EA4B3');


$('#about-game').css('font-style','italic');

$('p').dblclick(function(){
    $(this).css('font-size', '18px').css('-webkit-transition', '2s');
});
$('p').css('font-size', '25px');
$('p').css('text-align', 'center');

$('h1, p, li').css('background-color', '');
$('body').css('background-color', 'lightblue');