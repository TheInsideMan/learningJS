function limitText(){
	'user strict';
	var limitedText;
	var origionalText = document.getElementById('comments').value;

	var lastSpace = origionalText.lastIndexOf(' ',100);
	limitedText = origionalText.slice(0,lastSpace);
	document.getElementById('count').value = origionalText.length;
	document.getElementById('result').value = limitedText;
	return false;
}



function sphere(){
	'use strict';
	var volume;
	var radius = document.getElementById('radius').value;
	//get the absolute value
	radius = Math.abs(radius);

	volume = (4/3) * Math.PI * Math.pow(radius,3);
	volume = volume.toFixed(4);
	document.getElementById('volume').value = volume;
	return false;
}


function calculate(){
	'use strict';
	var total;
	var quantity = document.getElementById('quantity').value;
	var price  = document.getElementById('price').value;
	var tax  = document.getElementById('tax').value;
	var discount  = document.getElementById('discount').value;
	
	total = quantity * price;
	tax /= 100; 
	tax++;
	total *= tax;
	total -= discount;
	// set the decimal point to 2 places
	total = total.toFixed(2);
	document.getElementById('total').value = total;
	return false;
}//end of function


function init (){
	'use strict';
	var theSphereForm = document.getElementById('theSphereForm');
	var theSliceForm = document.getElementById('theSliceForm');
	var theForm = document.getElementById('theForm');
	theForm.onsubmit = calculate;
	theSphereForm.onsubmit = sphere;
	theSliceForm.onsubmit = limitText;
}
	
window.onload = init;		