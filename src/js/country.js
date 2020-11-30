/**
 * @param title string Hlavní titulek
 * @param subtitle string Podtitulek
 * @param imgSrc string Odkaz na obrázek
 * @return string
 */
export default (imgSrc, country, capital) => {

    var capitalShow
    if (document.getElementById("capitalBox").checked) {
        capitalShow = `<h4 class="continent-name">${capital}</h4>`;
    } else if (document.getElementById("capitalBox").checked == false) {
        capitalShow = ``;
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
             </div>
        </li>
    `
    return template;
}