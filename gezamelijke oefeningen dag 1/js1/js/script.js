
    //eerste keer console test (1 regel tekst)
    /*meerdere regels
    * regel 2
    * regel 3 */
    //variabelen

    var voorNaam = prompt("Geef je voornaam");
    var familieNaam = "Bossuyt";
    var geboorteJaar = 1996;
    var functie = "student";
    var gehuwd = true; // 1 = true, 0 = false
    var niets = 5;

    //code
    console.log(voorNaam);
    console.log(typeof(voorNaam)); //string

    console.log(familieNaam);
    console.log(typeof(familieNaam)); //string

    console.log(geboorteJaar);
    console.log(typeof(geboorteJaar)); //number

    console.log(functie);
    console.log(typeof(functie)); //string

    console.log(gehuwd);
    console.log(typeof(gehuwd)); //boolean

    console.log(niets);
    console.log(typeof(niets)); //number


    console.log(voorNaam + " " + familieNaam + " is in " + geboorteJaar +  " geboren ");
    console.log(voorNaam, familieNaam," is in ", geboorteJaar,  " geboren ");

    function sprekendeMuis(){
        alert("pieppiep")};

    if(confirm("Ben je zeker dat je dit wil verwijderen")){
        sprekendeMuis();
    };