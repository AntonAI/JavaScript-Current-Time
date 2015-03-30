// Returns current time in HH:MM:SS AM/PM format (with an optional offset in seconds)
 
var currentTime = function(offset) {
	var d = new Date();
	var amPM = 'am';

	// Subtract seconds from current date/time if necessary
	if (offset != null) {
		d = new Date(d - offset * 1000);
	}

	var hh = d.getHours();
	if (hh > 12) {
		hh = hh - 12;
		amPM = 'pm';
	}

	var mm = d.getMinutes();
	if (mm < 10) mm = '0' + mm;

	var ss = d.getSeconds();
	if (ss < 10) ss = '0' + ss;

	return (hh + ':' + mm + ':' + ss + amPM);
};
