//controle structuren
// selectie
// iteratie
// sequentie
// arrays

// declaratie variabelen

var cursisten = ["Tom","Tim", "Bart", "Els" ];
var cursusJaar = [2017,2018,2019];
// var cursusJaar = new Array(2017,2018,2019); // Dit is een tweede, objectgeorienteerde schrijfwijze (voor later, maar nu gewoon even tonen)

console.log(cursisten);
console.log(cursisten[2]);
console.log(cursisten.length);

console.log(cursusJaar);
console.log(cursusJaar[2]);
console.log(cursusJaar.length);

// cursist toevoegen achteraan
cursisten.push("Marieke");
console.log(cursisten);
// push voegt op het einde van de reeks een nieuwe cursist toe

//cursisten toevoegen, vooraan in de reeks
cursisten.unshift("thomas");
console.log(cursisten);
// .unshift schuift de rij op en plaatst de nieuwe waarde vooraan

// cursisten, het laatste element in de rij verwijderen.
cursisten.pop();
console.log(cursisten);

// eerste element in de rij verwijderen
cursisten.shift();
console.log(cursisten);

console.log(cursisten.indexOf("Bart"));

// splice functie

cursisten.splice(2,1);
console.log(cursisten);

// loops en arrays
for(var i = 0; i<=cursisten.length; i++){
    console.log(cursisten[i]);
    document.getElementById("cursistentest").innerHTML = cursisten[i];
}


//met een while loop
var i = 0;
while(i<=cursisten.length){
    console.log(cursisten[i]);
    i++;
}

//for each
cursisten.forEach(element => console.log(element));

//loop:continue and break
var data = ["Lode","Pepijn",1980,1973,"designer","developer", true, false];
for(var i = 0;i<=data.length;i++){
    if(typeof data[i] !== "string") break;
    console.log(data[i]);
}

