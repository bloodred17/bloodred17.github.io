// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 20-May-2019

document.write("<h1>To Calculate 2^1..to..2^N series :</h1><br>>> ");

var pow = +prompt("Enter a value:");
var product = 1;
for(var i=1; i<=pow; i++){
    for(var j = 1; j<= i; j++){
        product = product * 2;
    }
    document.write("2^"+i+ " = "+ product + "<br>");
    product = 1;
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");