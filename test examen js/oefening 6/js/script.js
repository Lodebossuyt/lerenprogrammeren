var eindGetal = parseInt(prompt("geef een eindgetal"));
var eersteArray = [];
var tweedeArray = [];

for(var i=1;i<=eindGetal;i*=2){
    var x = i;
    eersteArray.push(i);
    if(x>1){
        tweedeArray.push(x*2)
    }else{
        tweedeArray.push(x)
    }
}

console.log(eersteArray);
console.log(tweedeArray);