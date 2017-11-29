// Back-end logic:

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

//Below this line is front-end logic:

$(document).ready(function() {
	$("form#add").submit(function(event) {
  event.preventDefault();
	var number1 = parseInt($("#add1").val());
	var number2 = parseInt($("#add2").val());
	var addresult = add(number1, number2);
	$("#addoutput").text(addresult);
 	});
	$("form#subtract").submit(function(event) {
  event.preventDefault();
	var number1 = parseInt($("#subtract1").val());
	var number2 = parseInt($("#subtract2").val());
	var subtractresult = subtract(number1, number2);
	$("#subtractoutput").text(subtractresult);
 	});
 $("form#multiply").submit(function(event) {
 event.preventDefault();
 var number1 = parseInt($("#multiply1").val());
 var number2 = parseInt($("#multiply2").val());
 var multiplyresult = multiply(number1, number2);
 $("#multiplyoutput").text(multiplyresult);
	});
 $("form#divide").submit(function(event) {
 event.preventDefault();
 var number1 = parseInt($("#divide1").val());
 var number2 = parseInt($("#divide2").val());
 var divideresult = divide(number1, number2);
 $("#divideoutput").text(divideresult);
	});
});
