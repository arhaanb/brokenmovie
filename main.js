$('#about, #credits').hide()

$(".about").click(function () {
    $('#about').slideToggle();
    $('#credits').hide();
    $('.about').toggleClass('hi');
    $('.credits').removeClass('hi');
});

$(".credits").click(function () {
    $('#credits').slideToggle();
    $('#about').hide();
    $('.credits').toggleClass('hi');
    $('.about').removeClass('hi');
});


$(document).on('click', function (event) {
    // ... clicked on the 'body', but not inside of #nav-hid
    $('#about, #credits').fadeOut();
    $('.about, .credits').removeClass('hi');
});

$('.reveal').on('click', function (event) {
    event.stopPropagation();
});
$('.link').on('click', function (event) {
    event.stopPropagation();
});
// $('#lines').on('click', function (event) {
//     event.stopPropagation();
// });