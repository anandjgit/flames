$(function(){

	$('input[type="text"]').on('input', function(){
		var thisVal = $(this).val();
		thisVal !== '' ? $(this).addClass('has-content') : $(this).removeClass('has-content');
	});

	$('#flipToLogin').on('click', function(){
		document.getElementById("flames").reset(); 
		$('.has-content').removeClass('has-content');
	});
	
	// Checking for CSS 3D transformation support
	$.support.css3d = supportsCSS3D();
	
	var formContainer = $('#formContainer');
	
	// Listening for clicks on the ribbon links
	$('.flipLink').on('click', function(e){
		
		// Flipping the forms
		formContainer.toggleClass('flipped');
		
		// If there is no CSS3 3D support, simply
		// hide the form (exposing the recover one)
		if(!$.support.css3d){
			$('#flames').toggle();
		}
		e.preventDefault();
	});
	
	formContainer.find('form').submit(function(e){
		// Preventing form submissions. If you implement
		// a backend, you might want to remove this code
		e.preventDefault();
	});
	
	
	// A helper function that checks for the 
	// support of the 3D CSS3 transformations.
	function supportsCSS3D() {
		var props = [
			'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
		], testDom = document.createElement('a');
		  
		for(var i=0; i<props.length; i++){
			if(props[i] in testDom.style){
				return true;
			}
		}
		
		return false;
	}
});
