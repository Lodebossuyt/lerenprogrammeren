//Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
// De totale som van x getallen is x.
// Voorbeeld: Hoeveel getallen?: 3 Geef getal 1 in: 4 Geef getal 2 in: 3 Geef getal 3 in: 2 De totale som van 3 getallen is 9.



var i = parseInt(prompt("hoeveel sterren wilt u"));
var x = i;
var ster = "*";
var resultaat = "";
for(i;i>0;i--){
   resultaat = resultaat + ster;
   console.log(resultaat);
   document.writeln(resultaat + "<br>");
}

document.writeln(resultaat + "<br>");

for(x;x>0;x--){
   resultaat = resultaat.slice(0,-1);
   console.log(resultaat);
   document.writeln(resultaat + "<br>");
}


/*document.getElementById("demo").innerHTML = resultaat;

var i = parseInt(prompt("hoeveel sterren wilt u"));
var resultaat = "";
for(i; i>0; i--){
   resultaat = resultaat + "*";
   console.log(resultaat);
}

document.getElementById("demo").innerHTML = resultaat;*/

/*
*
* *
* **
* ***
* ****
 */