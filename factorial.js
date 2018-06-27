//Javascript

//Forward Multiplcation
// num = 4 
// 1 x 2 x 3 x 4 = 24
function factorial(num){
	var result = 1;
	for (var i = 2; i <= num; i++) {
		result *= i;
	}	
	return result;
}

//Reverse Multiplcation
// num = 4 
// 4 x 3 x 2 x 1 = 24
function factorialReverse(num){
	var result = num;
	for (var i = num-1; i >= 1; i--) {
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
	
}
