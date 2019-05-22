// + Discription: Wwrite a program in javascript to display message
// + Author     : Ankur S Dutta
// + Date       : 20-May-2019

document.write("<h1>To check if the number is :</h1><br>>> ");

var num = prompt("Enter a number:");
if(num < 0 || num === null || num === "" || isNaN(num)){
    document.write("Only positive intigers allowed");
}else{
    var temp = 0;
    for(var i = num; i > 0; i = parseInt(i/10)){
        temp = (temp*10) + (i % 10); 
        document.write(`i = ${i} temp = ${temp}<br>`);
    }
    document.write(`Number = ${num}, temp = ${temp}<br>`);
    if(temp == num){
        document.write(`Number is a Palindrome`);
    }else{
        document.write(`Number is not a Palindrome`);

    }
}

document.write("<div class=\"footer\"><h2>Press F5 to restart</h2></div>");
