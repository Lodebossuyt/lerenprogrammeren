/*
bijvb: i =5 --> i * i-1 * i-2 * i-3 * i-4 * i-5
 */

var i = parseInt(prompt("van welk getal wilt u de faculteit weten?"));
var x = i
for(i; i > 1;i--){
    x = x * (i-1)
    console.log(x);
}
