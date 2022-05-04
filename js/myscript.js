const guestage = parseInt(prompt("Inserisci la tua età"));

const guestkm = parseInt(prompt("Inserisci i kilometri che vuoi viaggiare"));

const guestprice = guestkm * 0.21;

console.log(guestprice);

const discunder = guestprice * 0.80;

const discover = guestprice * 0.60;

document.getElementById("kmoutput").innerHTML=guestkm + " €";

document.getElementById("costoutput").innerHTML=guestprice + " €";

if (guestage<=18) {
    document.getElementById("finalcostoutput").innerHTML=discunder + " €";
    document.getElementById("ageoutput").innerHTML="ancora minorenne faremo uno sconto del 20%";
}
else if (guestage>=60) {
    document.getElementById("finalcostoutput").innerHTML=discover + " €";
    document.getElementById("ageoutput").innerHTML="poveri vecchierelli faremo uno sconto del 40%";
}
else {
    document.getElementById("finalcostoutput").innerHTML="paga";
    document.getElementById("ageoutput").innerHTML="nè carne nè pesce, per voi niente sconti.";
}

