//logische operatoren
/*
&& = AND operator
|| = OR operator
! = tegenovergestelde
== 2 waarden gelijk behalve datatype
=== 2 waarden gelijk met datatype
!= 2 waarden niet gelijk behalve datatype
!== 2 waarden niet gelijk met datatype
>
<
>=
<=
 */

var getal1 = 5;
var getal2 = 6;
var getal3 = "5";
var getal4 = 5;

var gelijk = getal3 != getal4;
console.log(gelijk);
var gelijk = getal3 !== getal4; // 3 === kijkt ook naar de typeof, --> daarom false
console.log(gelijk);

var grootsteKleinste = getal1 > getal2;
console.log(grootsteKleinste);

var grootsteKleinste = getal1 < getal2;
console.log(grootsteKleinste);


//selectie

/*
var getal5 = parseInt(prompt("geef een eerste getal in"));
var getal6 = parseInt(prompt("geef een tweede getal in"));

if(getal5 > getal6){ console.log(getal5, "is groter dan", getal6);

}else if(getal5 === getal6){
    console.log(getal5, "is gelijk aan", getal6);

}else {
    console.log(getal5,"is kleiner dan", getal6);
}*/

var naam = prompt("geef uw naam");
var beroep = prompt("geef uw beroep in, maak een keuze: 1) arbeider of 2) bediende");

if(beroep.toUpperCase() == "BEDIENDE"){
    console.log("het beroep van", naam, "is", beroep.toLowerCase());
}else{
    console.log("het beroep van", naam, "is arbeider");
}

// het beroep van Lode is bediende/arbeider
