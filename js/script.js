$(document).ready(function() {
	$('.head__burger').click(function(event){
		$('.head__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})