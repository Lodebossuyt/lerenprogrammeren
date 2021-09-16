var tafel = parseInt(prompt("geef uw tafel"));
var eindGetal = parseInt(prompt("eindgetal?"));
var bewerking = 0;

for(var i = 1; bewerking < eindGetal;i++){
    bewerking = tafel * i;
    console.log(bewerking);
}
