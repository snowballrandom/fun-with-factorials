//alert('hello');
function factorial(num){
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}	
	return result;
}

document.getElementById("submit").onclick = function(){

	var num = document.getElementById("num").value;
	var ul = document.getElementById('factorialList');
	var li = document.createElement('li');	
	var html = document.createTextNode("The factorial of " + num + " = " + factorial(num) + "\n\n");
    var elm = ul.appendChild(li);

    li.setAttribute("class", "result")
    li.append(html);
    

	/**
	for (var i = 0; i <= ul.length; i++) {
		//console.log(i);
		console.log(ul[i]);
		
		
	}
	*/

	
}
