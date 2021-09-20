var getal = 0;
var resultaat = [];

while(getal >= 0){
    getal = prompt("Geef een getal");
    resultaat.push(getal);
}
var getalTonen = parseInt(prompt("het hoeveelste getal wilt u zien op het scherm?"));
console.log(resultaat[getalTonen - 1]);
