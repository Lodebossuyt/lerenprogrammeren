var eersteArray = [];
var tweedeArray = [];
var derdeArray = [];
var max = prompt("geef uw maximum nummer om op te tellen");


for(var i=0;i<=10;i++){

    var test = Math.floor(Math.random()  * max);
    eersteArray.push(test);
}
for(var i=0;i<=10;i++){

    var test = Math.floor(Math.random()  * max);
    tweedeArray.push(test);
}
for(var i = 0; i<=10;i++){
    derdeArray.push(eersteArray[i] + "+" + tweedeArray[i] + "=" + (eersteArray[i]+tweedeArray[i]));
    console.log(derdeArray[i]);
}

