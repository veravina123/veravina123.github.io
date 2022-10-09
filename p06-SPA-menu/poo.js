$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".bagian").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var sekaliID = el.id.split('_')[1];
		$('.bagian#' + sekaliID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.bagian:visible').fadeOut('medium', function() {
		$('.bagian#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});