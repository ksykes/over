$( ".hamburgerLinks" ).hide();

$( ".hamburger" ).click(function() {
	$( ".hamburgerLinks" ).slideToggle( "slow" );
	$( ".fa-bars" ).toggleClass( "turnHamburger" );
});
