var hoeveelheid = parseInt(prompt("hoeveel getallen?"));
var nummer1 = 0;
var nummer2 = 1;
var volgendeTerm;

for(var i = 1;i<=hoeveelheid;i++){
    console.log(nummer1);
    volgendeTerm = nummer1 + nummer2;
    nummer1 = nummer2;
    nummer2 = volgendeTerm;
}