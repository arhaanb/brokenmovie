$(".about").click(function () {
	$('#about').slideToggle();
	$('#credits').hide();
	$('.about').toggleClass('hi');
	$('.credits').removeClass('hi');
	$('footer').toggleClass('foot');
});

$(".credits").click(function () {
	$('#credits').slideToggle();
	$('#about').hide();
	$('.credits').toggleClass('hi');
	$('.about').removeClass('hi');
	$('footer').toggleClass('foot');
});


$(document).on('click', function (event) {
	$('#about, #credits').fadeOut();
	$('.about, .credits').removeClass('hi');
	$('footer').removeClass('foot');
});

$('.reveal').on('click', function (event) {
	event.stopPropagation();
});
$('.link').on('click', function (event) {
	event.stopPropagation();
});