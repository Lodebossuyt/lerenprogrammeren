/*
oefening 1A:
1) leeftijd meer dan 18j OK u mag deelnemen aan de nationale loterij
2) > 18j u mag niet
3) >= 16j u mag met ouders deelnemen

vragen: 1) naam, 2) leeftijd

Oefening 2B:
 vragen: 1) naam 2) vragen geboortejaar en leeftijd berekenen (geen maanden en dagen)
 */
var naam = prompt("geef uw naam");
var leeftijd =parseInt(prompt("geen uw leeftijd"));

if(leeftijd >= 18){

    console.log(naam," mag deelnemen aan de nationale loterij");

}else if(leeftijd < 16){

    console.log(naam, " mag niet deelnemen aan de nationale loterij ");

}else{

    console.log(naam, " mag deelnemen mits toestemming van de ouders");

}
/*
//andere redenering if in if (ifception)
if(leeftijd >= 16){
if(leeftijd =>18){
console.log("u mag deelnemen);
}else{
console.log("u mag deelnemen mits toestemming van de ouders");
}else{
console.log("u mag niet deelnemen");
}
 */