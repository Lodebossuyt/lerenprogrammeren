var eersteArray = [];

var hoeveelNamen = parseInt(prompt("hoeveel namen wilt u ordenen?"));

for(var i = 0; i < hoeveelNamen;i++){
    var naam = prompt("vul een naam in");
    eersteArray.push(naam);
}
eersteArray.sort();
console.log(eersteArray);

