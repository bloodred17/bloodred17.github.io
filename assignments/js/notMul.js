// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 20-May-2019

document.write("<h1>To Multiply without using ( * ) operator :</h1><br>>> ");

var num1 = +prompt("Enter number 1:");
var num2 = +prompt("Enter number 2:");
var mul = 0;
var negative = false;

if(num1 < 0){
    num1 = num1 * (-1);
    negative = true;
}

for(var i=num1; i > 0; i--){
    mul = mul + num2;
}

if(negative){
    mul = mul * (-1);
    num1 = num1 * (-1);
}

document.write(num1+ " * "+ num2+ " = "+mul);

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");