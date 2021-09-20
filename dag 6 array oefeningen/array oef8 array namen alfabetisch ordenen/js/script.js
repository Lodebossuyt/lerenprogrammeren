var eersteArray = [];
var tweedeArray = [];

var hoeveelNamen = parseInt(prompt("hoeveel namen wilt u ordenen?"));

for(var i = 0; i < hoeveelNamen;i++){
    var naam = prompt("vul een naam in");
    eersteArray.push(naam);
}
console.log(eersteArray);

for(var i = hoeveelNamen-1; i >= 0; i--) {
    var nummerAscii = eersteArray[i].charCodeAt(0);
    console.log(nummerAscii);
    for(var x = 0; x<i;x++){
        if(nummerAscii>eersteArray[x].charCodeAt(0)){
            tweedeArray.push(eersteArray[i]);


        }


    }


}


console.log(tweedeArray);


