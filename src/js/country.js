/**
 * @param title string Hlavní titulek
 * @param subtitle string Podtitulek
 * @param imgSrc string Odkaz na obrázek
 * @return string
 */
export default (imgSrc, country, capital, region, languages, currencies, area, population) => {


    var allLanguagesName = getAllLanguagesName()
    function getAllLanguagesName() {
        var languagesName = ""
        languages.forEach(item => {languagesName += item.name + ", "})
        if (languagesName.length > 0) {
            languagesName = languagesName.substring(0, languagesName.length - 2);
        }
        return languagesName
        }

    var allCurrenciesName = getAllCurrenciesName()
    function getAllCurrenciesName() {
        var currenciesName = ""
        currencies.forEach(item => {currenciesName += item.name + ", "})
        if (currenciesName.length > 0) {
            currenciesName = currenciesName.substring(0, currenciesName.length - 2);
        }
        return currenciesName
    }

    var capitalShow
    if (document.getElementById("capitalBox").checked) {
        capitalShow = `<h4 class="continent-name">Capital: ${capital}</h4>`;
    } else if (document.getElementById("capitalBox").checked == false) {
        capitalShow = ``;
    }

    var regionShow
    if (document.getElementById("regionBox").checked) {
        regionShow = `<h4 class="continent-name">Continent: ${region}</h4>`;
    } else if (document.getElementById("regionBox").checked == false) {
        regionShow = ``;
    }

    var langShow
    if (document.getElementById("langBox").checked) {
        langShow = `<h4 class="continent-name">Languages: ${allLanguagesName}</h4>`;
    } else if (document.getElementById("langBox").checked == false) {
        langShow = ``;
    }

    var currShow
    if (document.getElementById("currBox").checked) {
        currShow = `<h4 class="continent-name">Currencies: ${allCurrenciesName}</h4>`;
    } else if (document.getElementById("currBox").checked == false) {
        currShow = ``;
    }

    var areaShow
    if (document.getElementById("areaBox").checked && area !== null) {
        areaShow = `<h4 class="continent-name">Area: ${area}</h4>`;
    } else if (document.getElementById("areaBox").checked && area == null) {
        areaShow = `<h4 class="continent-name">Area: no information</h4>`;
    } else if (document.getElementById("areaBox").checked == false) {
        areaShow = ``;
    }

    var populationShow
    if (document.getElementById("populationBox").checked) {
        populationShow = `<h4 class="continent-name">Population: ${population}</h4>`;
    } else if (document.getElementById("populationBox").checked == false) {
        populationShow = ``;
    }


    let template = `


        <li class="country-card">
            <div class="country-flag-container" id="country-flag-container">
            <img
                src=${imgSrc}
                alt="country flag"
                class="country-flag-element"
            />
            </div>

            <div class="country-data" id="listInfo">
                <h3 class="country-name">
                    ${country}
                </h3>
                    ${capitalShow}
                    ${regionShow}
                    ${langShow}
                    ${currShow}
                    ${areaShow}
                    ${populationShow}
             </div>
        </li>
    `
    return template;
}