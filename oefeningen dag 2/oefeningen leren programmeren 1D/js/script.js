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


var geboorteJaar = parseInt(prompt("geef uw geboortejaar in"));
var lopendJaar = parseInt(prompt("geef het lopende jaar"));

if((lopendJaar - geboorteJaar) >= 18){
console.log(alert("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen "));
}else{
    console.log(alert("Gelukkig heb ik mijn ouders nog "));
}