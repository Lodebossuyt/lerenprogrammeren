//Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
// De totale som van x getallen is x.
// Voorbeeld: Hoeveel getallen?: 3 Geef getal 1 in: 4 Geef getal 2 in: 3 Geef getal 3 in: 2 De totale som van 3 getallen is 9.

var aantalGetallen = parseInt(prompt("hoeveel getallen wilt u optellen?"));
var i = 0
for(i;i < aantalGetallen;i++ ){
   var getal = parseInt(prompt("geef uw getal"));
   getal = getal + getal;
}
console.log(getal);