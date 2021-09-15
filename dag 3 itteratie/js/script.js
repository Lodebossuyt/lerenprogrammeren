//for loop
/*
for(teller;conditie;wijziging){
    code
}*/
// i++ --> i = i + 1
/*
var i = 1;
for(i; i<=10; i ++ ){
    console.log(i);
}
i = 1;
var x = 0;
for(i; i<=10;x){
    console.log(x);
    x = x + 2;
    i++;
}*/

/*var i = 1;
var x = 10
for(i; i<=10;x){
    console.log(x);
    x = x - 1;
    i++;
}

i = 10
for(i;i>=1;i--){
    console.log(i);
}*/

//while loop
// doe dingen zolang er aan een conditie wordt voldaan.

var text = "";
var i = 0;
while(i < 10){
    //text = text + "De nummers zijn" +i;
    text += "<br>de nummers zijn " +i;
    i++;
}
document.getElementById("demo").innerHTML = text;