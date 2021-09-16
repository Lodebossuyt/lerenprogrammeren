/*
schrijf een programma die een karakter telt in een tekenreeks(string)
Tip: maak gebruik van een build in functie.
 */
var tekenreeks = prompt("geef uw tekenreeks");
var teken = prompt("geef uw teken");
var resultaat = 0;

for(i = 0;i < tekenreeks.length;i++){
    if(tekenreeks.charAt(i) == teken){
        resultaat ++
    }
}
console.log(resultaat);
