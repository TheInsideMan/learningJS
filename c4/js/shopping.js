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
	
	document.getElementById('total').value = total;
	return false;
	
	

	
}//end of function

function init (){
	'use strict';
	var theForm = document.getElementById('theForm');
	theForm.onsubmit = calculate;
}
	
window.onload = init;		