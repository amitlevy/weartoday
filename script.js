function updateimage() {
	// Obtain inputed temprature from input box.
	$(document).ready(function() {
	    var tempr = $('#inputed').val();
	    if (tempr == "") {
	    	var recommand = "Please enter a temprature."
	    } else if (tempr > 99) {
	    	var recommand = "Burn.";
	    } else if (tempr > 24) {
	    	var recommand = "You should wear a t-shirt and shorts.";
	    } else if (tempr > 22) {
	    	var recommand = "You should wear a t-shirt.";
	    } else if (tempr > 17) {
	    	var recommand = "You should wear a long sleeved shirt.";
	    } else if (tempr > 12) {
	    	var recommand = "You should wear a shirt and jacket.";
	    } else if (tempr > 5) {
	    	var recommand = "You should wear a shirt, raincoat and a light scarf.";
	    } else {
	    	var recommand = "You should wear a shirt, raincoat, winter scarf and light gloves.";
	    }

	    $("#recommand").html(recommand);

	});
}

//setInterval(updatetime(), 999);

setInterval(function(){
	updateimage();
}, 200);





