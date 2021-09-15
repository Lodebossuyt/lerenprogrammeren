/*
oefening 1A:
1) leeftijd meer dan 18j OK u mag deelnemen aan de nationale loterij
2) > 18j u mag niet
3) >= 16j u mag met ouders deelnemen

vragen: 1) naam, 2) leeftijd

Oefening 2B:
 vragen: 1) naam 2) vragen geboortejaar en leeftijd berekenen (geen maanden en dagen)

Oefening 3C: Wanneer men 18 jaar of ouder is dient men te vragen of ze een volledig bulletin van 12 vakjes willen spelen.
Bij een volledig bulletin toon je de kostprijs van 20 euro. Voor 2 vakjes is de kostprijs 4 euro.
Voor 4 vakjes 8 euro. Voor 6 vakjes 12 euro. Voor 8 vakjes 16 euro. Voor 10 vakjes 18 euro.
 */
var naam = prompt("geef uw naam");
var leeftijd = parseInt(prompt("geef uw geboortejaar"));
var vakjes;

leeftijd = 2021 - leeftijd;

if (leeftijd >= 18) {
    vakjes = parseInt(prompt("hoeveel vakjes wilt u spelen?: 12 vakjes = 20 euro, 10 vakjes = 18 euro, 8 vakjes = 16 euro, 6 vakjes = 12 euro, 4 vakjes = 8 euro"));
    if(vakjes < 0){

        vakjes = parseInt(prompt("geef een positief getal in, keuzes: 4, 6, 8, 10, 12"));

    }else if(vakjes == 4){
        console.log("dit kost u 8 euro");
    }else if(vakjes == 6){
        console.log("dit kost u 12 euro");
    }else if(vakjes == 8){
        console.log("dit kost u 16 euro");
    }else if(vakjes == 10){
        console.log("dit kost u 18 euro");
    }else if(vakjes == 12){
        console.log("dit kost u 20 euro");
    }else{
        alert("kies 1 van de gegeven opties en refresh de pagina, want ik weet nog niet hoe ik moet programmeren dat dit opnieuw wordt gevraagd");
    }


} else if (leeftijd < 16) {

    console.log(naam, "mag niet deelnemen aan de nationale loterij ");

} else {

    console.log(naam, "mag deelnemen mits toestemming van de ouders");

}