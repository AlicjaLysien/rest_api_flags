import '../css/style.css';
import country from "./country";
import gamePhotoTemplate from "./gamePhoto";
import answer1 from "./gameAnswer1";
import answer2 from "./gameAnswer2";
import answer3 from "./gameAnswer3";
import answer4 from "./gameAnswer4";


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
    document.getElementById('gamePhotoImg').innerHTML = "";
    document.getElementById('answer1').innerHTML = "";
    document.getElementById('answer2').innerHTML = "";
    document.getElementById('answer3').innerHTML = "";
    document.getElementById('answer4').innerHTML = "";
    document.getElementById("ul-countries").innerHTML = "";
    document.getElementById("form").className = "showForm"
    API();
}

var buttonGame = document.getElementById("buttonGame")
buttonGame.addEventListener("click", prepareGame)

function prepareGame() {
    document.getElementById('gamePhotoImg').innerHTML = "";
    document.getElementById('answer1').innerHTML = "";
    document.getElementById('answer2').innerHTML = "";
    document.getElementById('answer3').innerHTML = "";
    document.getElementById('answer4').innerHTML = "";
    document.getElementById("ul-countries").innerHTML = " ";
    document.getElementById("form").className = "noForm"

    document.getElementById("answer1").style.backgroundColor = "white"
    document.getElementById("answer2").style.backgroundColor = "white"
    document.getElementById("answer3").style.backgroundColor = "white"
    document.getElementById("answer4").style.backgroundColor = "white"
   document.getElementById("nextButton").className = "noForm"
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
                const gamePhotoDiv = document.getElementById('gamePhotoImg')
                const answer1Div = document.getElementById('answer1');
                const answer2Div = document.getElementById('answer2');
                const answer3Div = document.getElementById('answer3');
                const answer4Div = document.getElementById('answer4');

                const randomIndex1 = Math.floor(Math.random() * 250);
                const randomIndex2 = Math.floor(Math.random() * 250);
                const randomIndex3 = Math.floor(Math.random() * 250);
                const randomIndex4 = Math.floor(Math.random() * 250);
                const goodAnswer = randomIndex1

                let answersArray = [randomIndex1, randomIndex2, randomIndex3, randomIndex4]
                shuffle(answersArray);

                gamePhotoDiv.innerHTML += gamePhotoTemplate(data[randomIndex1].flag)
                answer1Div.innerHTML += answer1(data[answersArray[0]].name)
                answer2Div.innerHTML += answer2(data[answersArray[1]].name)
                answer3Div.innerHTML += answer3(data[answersArray[2]].name)
                answer4Div.innerHTML += answer4(data[answersArray[3]].name)

                document.getElementById("answer1").onclick = function () {
                    if (answersArray[0] === goodAnswer) {
                        document.getElementById("answer1").style.backgroundColor = " lawngreen"
                        document.getElementById("nextButton").className = "showForm"
                    } else document.getElementById("answer1").style.backgroundColor = "indianred"
                }

                document.getElementById("answer2").onclick = function () {
                    if (answersArray[1] === goodAnswer) {
                        document.getElementById("answer2").style.backgroundColor = " lawngreen"
                        document.getElementById("nextButton").className = "showForm"
                    } else document.getElementById("answer2").style.backgroundColor = "indianred"
                }

                document.getElementById("answer3").onclick = function () {
                    if (answersArray[2] === goodAnswer) {
                        document.getElementById("answer3").style.backgroundColor = " lawngreen"
                        document.getElementById("nextButton").className = "showForm"
                    } else document.getElementById("answer3").style.backgroundColor = "indianred"
                }

                document.getElementById("answer4").onclick = function () {
                    if (answersArray[3] === goodAnswer) {
                        document.getElementById("answer4").style.backgroundColor = " lawngreen"
                        document.getElementById("nextButton").className = "showForm"
                    } else document.getElementById("answer4").style.backgroundColor = "indianred"
                }

                document.getElementById("nextButton").onclick = function () {
                    prepareGame()
                }

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


/* game functions */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}





