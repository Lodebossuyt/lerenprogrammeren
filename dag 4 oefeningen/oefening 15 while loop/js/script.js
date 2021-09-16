var hoeveelGetallen = parseInt(prompt("hoeveel getallen wilt u optellen?"));
var i = 1;
var resultaat = 0;
while(i<=hoeveelGetallen){
    var getal = parseInt(prompt("geef getal" + i));
    resultaat = resultaat + getal;
    i++;
}
console.log("de som van de getallen is", resultaat);