var eersteArray = [];
var tweedeArray = [];
var derdeArray = [];

for(var i=0;i<=10;i++){
    eersteArray.push(i);
}
for(var i=0;i<=10;i++){
    tweedeArray.push(i);
}
for(var i = 0; i<=10;i++){
    derdeArray.push(eersteArray[i] + "+" + tweedeArray[i] + "=" + (eersteArray[i]+tweedeArray[i]));
    console.log(derdeArray[i]);
}

