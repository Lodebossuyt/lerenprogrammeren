/*
schrijf een programma die je alle potentiele mogelijke combinaties geef in een 2- decimale
vorm uitgeprint met een komma ertussen tot en met 99. voorbeeld output:
00,01,02,03,04...,99
 */

i = 0
var output;
for(i;i<100;i++){
    output = ("0" + i).slice(-2);
    console.log(output);
}
