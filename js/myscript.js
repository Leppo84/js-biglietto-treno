const guestage = parseInt(prompt("Inserisci la tua età"));

console.log(guestage);

const guestkm = parseInt(prompt("Inserisci i kilometri che vuoi viaggiare"));

let guestprice = guestkm * 0.21;

console.log(guestprice);

let discunder = guestprice * 0.80;

let discover = guestprice * 0.60;

document.getElementById("kmoutput").innerHTML=guestkm + " €";

guestprice=guestprice.toFixed(2);

document.getElementById("costoutput").innerHTML=guestprice + " €";

if (guestage<=18) {
    discunder=discunder.toFixed(2);

    document.getElementById("finalcostoutput").innerHTML=discunder + " €";
    document.getElementById("ageoutput").innerHTML="tu giovane, mossi a pietà, faremo uno sconticino del 20%. Tanto paga pantaloni.";
}
else if (guestage>=60) {
    discover=discover.toFixed(2);

    document.getElementById("finalcostoutput").innerHTML=discover + " €.";
    document.getElementById("ageoutput").innerHTML="Lei un po' avanti con l'età applicheremo ben il 40% di sconto!";
}
else {
    document.getElementById("finalcostoutput").innerHTML="è uguale a prima. Paga.";
    document.getElementById("ageoutput").innerHTML="nè carne nè pesce, per te nessuna pietà. Niente sconti.";
}

