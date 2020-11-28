export default (name, population, terrain) => {

    let template =  `
        <li class="country-card">
           <div class="country-data">
                <h3 class="country-name">
                    ${name}
                </h3>
                <h4 class="continent-name">Population : ${population}</h4>
                <h4 class="continent-name">Terrain : ${terrain}</h4>
            </div>
        </li>
    `
    return template;
}