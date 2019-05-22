// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 20-May-2019

document.write("<h1>To calculate the power of a Number till N :</h1><br>>> ");

var num = +prompt("Enter number value:");
var pow = +prompt("Enter power value:");
var product = 1;
for(var i=1; i<=pow; i++){
    for(var j = 1; j<= i; j++){
        product = product * num;
    }
    document.write(num+"^"+i+ " = "+ product + "<br>");
    product = 1;
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");