var FINAL_BACKGROUND_COLOR = 205;
var START_BACKGROUND_COLOR = 255;
var INTERVAL = 10;
var current_background = 255;
var fade_in_call;
var fade_out_call;

// We will call this on mouse hover. It will fade the background in
function fade_in(div1) {
	// Clear the fade out call
	clearTimeout(fade_out_call);

	// The hexadecimal string representation of the number
	var str_background = current_background.toString(16);
	div1.style.background = '#' + str_background + str_background + str_background;
	if (current_background != FINAL_BACKGROUND_COLOR) {
		current_background = current_background - INTERVAL;
		fade_in_call = setTimeout(function() { fade_in(div1); }, 250);
	}
}

// We will call this on mouse out. It will fade the background back out
function fade_out(div1) {
	// Clear the fade in call
	clearTimeout(fade_in_call);

	// The hexadecimal string representation of the number
	var str_background = current_background.toString(16);
	div1.style.background = '#' + str_background + str_background + str_background;
	if (current_background != START_BACKGROUND_COLOR) {
		current_background = current_background + INTERVAL;
		fade_out_call = setTimeout(function() { fade_out(div1); }, 250);
	}	
}