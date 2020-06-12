$('#about, #credits').hide()

$(".about").click(function () {
    $('#about').toggle();
    $('#credits').hide();
    $('.about').toggleClass('hi');
    $('.credits').removeClass('hi');
});

$(".credits").click(function () {
    $('#credits').toggle();
    $('#about').hide();
    $('.credits').toggleClass('hi');
    $('.about').removeClass('hi');
});


$(document).on('click', function (event) {
    // ... clicked on the 'body', but not inside of #nav-hid
    $('#about, #credits').hide();
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