/**
 * @param title string Hlavní titulek
 * @param subtitle string Podtitulek
 * @param imgSrc string Odkaz na obrázek
 * @return string
 */
export default (title, subtitle, imgSrc) => {


    let template =  `
        <li class="country-card">
            <div class="country-flag-container">
            <img
                src=${imgSrc}
                alt="country flag"
                class="country-flag-element"
            />
            </div>

            <div class="country-data">
                <h3 class="country-name">
                    ${title}
                </h3>
                <h4 class="continent-name">${subtitle}</h4>
   
            </div>
        </li>
    `

    return template;
}