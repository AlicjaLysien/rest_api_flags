import '../css/style.css';
import country from "./country";
import game from "./game";


var order = "start";
var address = "https://restcountries.eu/rest/v2/";


document.getElementById("continent").onchange = function () {
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
    address = newAddress;

    API();
}

document.getElementById("order").onchange = function changeOrder() {
    var newOrder;
    if (document.getElementById("ZA").checked) {
        newOrder = "ZA"
    } else if (document.getElementById("AZ").checked) {
        newOrder = 'AZ'
    } else if (document.getElementById("smallest").checked) {
        newOrder = 'smallest'
    } else if (document.getElementById("largest").checked) {
        newOrder = 'largest'
    }
    document.getElementById("ul-countries").innerHTML = "";
    order = newOrder;
    API();
}

document.getElementById("info").onchange = function newInfo() {
    document.getElementById("ul-countries").innerHTML = "";
    API();
}

document.getElementById("buttonInformation").onclick = function buttonInformation() {
    document.getElementById("gameDiv").innerHTML = "";
    document.getElementById("ul-countries").innerHTML = "";
    document.getElementById("form").className = "showForm"
    API();
}

document.getElementById("buttonGame").onclick = function buttonGame() {
    document.getElementById("gameDiv").innerHTML = "";
    document.getElementById("ul-countries").innerHTML = "";
    document.getElementById("form").className = "noForm"
    API2();
}



function API() {
    fetch(address)
        .then(response => response.json())
        .then(function (dataOrder) {
                if (order == "ZA") {
                    dataOrder.reverse()
                } else if (order == "AZ") {
                    dataOrder.sort(compareAZ)
                } else if (order == "smallest") {
                    dataOrder.sort(compareSmallest)
                } else if (order == "largest") {
                    dataOrder.sort(compareLargest)
                }
                return dataOrder
            }
        )
        .then(data => {
            const countries = document.querySelector('.country-list');
            data.forEach(element => {
                countries.innerHTML += country(
                    element.flag,
                    element.name,
                    element.capital,
                    element.region,
                    element.languages,
                    element.currencies,
                    element.area,
                    element.population)
                /*  console.log('Success:', data); */
            }).catch((error) => {
                console.error('Error:', error);
            })
        })
}

function API2() {
    fetch(`https://restcountries.eu/rest/v2/`)
        .then(response => response.json())
        .then(data => {
                const countries = document.querySelector('.gameDiv');
                const randomIndex1 = Math.floor(Math.random() * 250);
                const randomIndex2 = Math.floor(Math.random() * 250);
                const randomIndex3 = Math.floor(Math.random() * 250);
                const randomIndex4 = Math.floor(Math.random() * 250);
                countries.innerHTML += game(
                    data[randomIndex1].flag,
                    data[randomIndex1].name,
                    data[randomIndex2].name,
                    data[randomIndex3].name,
                    data[randomIndex4].name)
            }
            /*  console.log('Success:', data); */
        ).catch((error) => {
        console.error('Error:', error);
    })
}


function compareAZ(a, b) {
    let comparison = 0;
    if (a.name > b.name) {
        comparison = 1;
    } else if (a.name < b.name) {
        comparison = -1;
    }
    return comparison;
}

function compareSmallest(a, b) {
    let comparison = 0;
    if (a.area > b.area) {
        comparison = 1;
    } else if (a.area < b.area) {
        comparison = -1;
    }
    return comparison;
}

function compareLargest(a, b) {
    let comparison = 0;
    if (a.area < b.area) {
        comparison = 1;
    } else if (a.area > b.area) {
        comparison = -1;
    }
    return comparison;
}

