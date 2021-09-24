var zin = prompt("geef een zin");
var lengteZin = zin.length;
var omgekeerdeZin = "";
var laatsteKarakter = "";


for(var i=1; i <= lengteZin;i++){

    laatsteKarakter = zin.charAt(zin.length-1);
    zin = zin.substring(0,zin.length-1)

    omgekeerdeZin = omgekeerdeZin + laatsteKarakter;

    console.log(laatsteKarakter);
    console.log(zin);

}


console.log(omgekeerdeZin);
