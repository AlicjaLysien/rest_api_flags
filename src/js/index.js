import '../css/style.css';
import country from "./country";

var address = "https://restcountries.eu/rest/v2/";

document.getElementById("continent").onchange = function continentt() {
    var newAddress;
    switch (document.getElementById("continent").value) {
        case "all":
            newAddress = "https://restcountries.eu/rest/v2/";
            break;
        case "europe":
            newAddress = "https://restcountries.eu/rest/v2/region/europe";
            break;
        case "asia":
            newAddress = "https://restcountries.eu/rest/v2/region/asia";
            break;
        case "america":
            newAddress = "https://restcountries.eu/rest/v2/region/americas";
            break;
        case "africa":
            newAddress = "https://restcountries.eu/rest/v2/region/africa";
            break;
        case "australia":
            newAddress = "https://restcountries.eu/rest/v2/region/oceania";
            break;
    }

    document.getElementById("ul-countries").innerHTML = "";

    API(newAddress);
}

function API(a) {
    console.log("URL call : " + a)
    fetch(a)
        .then(response => response.json())
        .then(data => {
            const countries = document.querySelector('.country-list');
            data.forEach(element => countries.innerHTML += country(
                element.name,
                element.capital,
                element.flag))
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

API(address);

