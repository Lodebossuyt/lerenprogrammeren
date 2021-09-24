var eindGetal = parseInt(prompt("geef een eindgetal"));
var resultaat = 1;

for(i = 2;i<=eindGetal;i++){

if(i % 2 == 0){
    resultaat = resultaat + i;
}else{
    resultaat = resultaat - i;
}

}
console.log(resultaat);
