// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 20-May-2019

document.write("<h1>To Print * Rhombus pattern :</h1><br>>> ");

var num = +prompt("Input a number (0-9):");
num = (num%2 !== 0)? num : num+1;
var upper = num, lower = num;
for(var i = 0; i < num; i++){
    for(var j = 1; j <= 2*num-1; j++){
        if(j>=lower && j <= upper){
            document.write("*");
        }else{
            document.write("&nbsp");
        }
    }
    if(i < (num/2)-1){
        lower = lower -1;
        upper = upper +1;
    }else{
        lower = lower +1;
        upper = upper -1;
    }
    document.write("<br>");
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");
