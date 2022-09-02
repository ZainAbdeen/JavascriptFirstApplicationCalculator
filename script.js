

let number1;
let number2;
let result;

function add(number1,number2)
{
	result=number1+number2;
	return result;
}

function sub(number1,number2)
{
	result=number1-number2;
	return result;
}

function mul(number1,number2)
{
	result=number1*number2;
	return result;
}

function div(number1,number2)
{
	result=number1/number2;
	return result;
}

function main()
{




number1=prompt("Enter any number");
number1=parseInt(number1);


if(isNaN(number1))
{
	alert("You Enter wrong number "+number1);
	return;
}

else 

{
number2=prompt("Enter any number");
 number2=parseInt(number2);
 if(isNaN(number2))
 {
    alert("You Enter wrong number "+number2);
	return;
 }
let operator=prompt("Enter the operator");
let catching;

if(operator=='+')
{
	catching=add(number1,number2);
   document.write(`The Result is: ${number1} ${operator} ${number2} = ${catching}`);
}
else if(operator=='*')
{
	catching=mul(number1,number2);
    document.write(`The Result is: ${number1} ${operator} ${number2} = ${catching}`);
}

else if(operator=='/')
{
	catching=div(number1,number2);
    document.write(`The Result is: ${number1} ${operator} ${number2} = ${catching}`);
}

else if(operator=='-')
{
	catching=sub(number1,number2);
    document.write(`The Result is: ${number1} ${operator} ${number2} = ${catching}`);
}

else
{
	alert("You providing wrong operator" + operator);
	return;
}

    
}







}
main();

