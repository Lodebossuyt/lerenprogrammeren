var eersteArray = [];
var tweedeArray = [];
var derdeArray = [];
var max = parseInt(prompt("geef het maximum getal"));

for(var i = 0; i <10; i++){
    var randomNumber = Math.floor(Math.random()* max);
    eersteArray.push(randomNumber);

}
for(var i = 0; i <10; i++){
    var randomNumber = Math.floor(Math.random()* max);
    tweedeArray.push(randomNumber);

}

for(var i = 0; i<10;i++){

    if(eersteArray[i] % 2 === 0){
        derdeArray.push(eersteArray[i]);
    }

}

for(var i = 0; i<10;i++){

    if(tweedeArray[i] % 2 === 0){
        derdeArray.push(tweedeArray[i]);
    }

}
console.log(eersteArray);
console.log(tweedeArray);
console.log(derdeArray);