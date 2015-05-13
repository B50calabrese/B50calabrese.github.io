var FINAL_BACKGROUND_COLOR = 'd0d0d0';
var current_background = 15;
var fade_in_call;
var fade_out_call;

// We will call this on mouse hover. It will fade the background in over 1.5 sec
function fade_in(div1) {
	// Clear the fade out call
	clearTimeout(fade_out_call);

	// The hexadecimal string representation of the number
	var str_background = current_background.toString(16);
	div1.style.background = '#' + str_background + '0' + str_background + '0'
			+ str_background + '0';
	if (current_background != 13) {
		current_background = current_background - 1;
		fade_in_call = setTimeout(function() { fade_in(div1); }, 500);
	}
}

// We will call this on mouse out. It will fade the background back over 1.5 sec
function fade_out(div1) {
	// Clear the fade in call
	clearTimeout(fade_in_call);

	// The hexadecimal string representation of the number
	var str_background = current_background.toString(16);
	div1.style.background = '#' + str_background + '0' + str_background + '0'
			+ str_background + '0';
	if (current_background != 15) {
		current_background = current_background + 1;
		fade_out_call = setTimeout(function() { fade_out(div1); }, 500);
	}	
}