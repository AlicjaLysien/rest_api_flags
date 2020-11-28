import '../css/style.css';
import country from "./country";
import starwars from "./starwars";
import employee from "./employee";

/*
    Nápověda pro Star Wars API
    Pro úspešně volání API je potřeba následující formát:
    https://cors-anywhere.herokuapp.com/http://swapi.dev/api/planets
*/

fetch('https://restcountries.eu/rest/v2/region/oceania')
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

fetch('http://swapi.dev/api/planets', {
    headers: {
        'origin': 'x-requested-with',
    }
})
    .then(response => response.json())
    .then(data => {
        const countries = document.querySelector('.star-wars-list');
        data.results.forEach(element => countries.innerHTML += starwars(
            element.name,
            element.population,
            element.terrain))
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(data => {
        const countries = document.querySelector('.employees-list');
        data.data.forEach(element => countries.innerHTML += employee(
            element.id,
            element.employee_name,
            element.employee_salary,
            element.employee_age))
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });