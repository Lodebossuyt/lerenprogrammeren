var hoeveelNamen = parseInt(prompt("hoeveel namen wilt u ingeven?"));
var arrayNamen = [];
for(var i = 0;i<hoeveelNamen;i++){
    var namen = prompt("geef een naam");
    arrayNamen.push(namen);
    console.log(arrayNamen[i]);
}