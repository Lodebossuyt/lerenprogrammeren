var getal1 = parseInt(prompt("geef getal 1"));
var getal2 = parseInt(prompt("geef getal 2"));
var ggd;
var kgv;

for(var i = 1;i <= getal1 && i <= getal2; i++){
    if( getal1 % i == 0 && getal2 % i == 0){
        ggd = i;
    }
}

kgv = (getal1 * getal2) / ggd;
console.log(kgv);
