export default (imgSrc, name1, name2, name3, name4) => {

    let template = `



            <div class="country-flag-container" id="country-flag-container">
            <img id="gamePhoto"
                src=${imgSrc}
                alt="country flag"
                class="country-flag-element"
            />
            </div>
            
      ${name1}
      ${name2}
      ${name3}
      ${name4}
          

    `
    return template;
}
