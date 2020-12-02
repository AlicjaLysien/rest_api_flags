export default (imgSrc, name1, name2, name3, name4) => {

    var nameArray = [name1, name2, name3, name4]

    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffle(nameArray);

    let template = `


<div>
            <div class="country-flag-container">
            <img id="gamePhoto"
                src=${imgSrc}
                alt="country flag"
                class="country-flag-element"
            />
            </div>
            
    <div class="answerColumn">  
    <div class="gameAnswer">${nameArray[0]}</div>
    <div class="gameAnswer">${nameArray[1]}</div>
    </div>
    
    <div class="answerColumn">  
    <div class="gameAnswer">${nameArray[2]}</div>
    <div class="gameAnswer">${nameArray[3]}</div>
    </div>
    
    <div id="nextButton">Next</div>

          </div>

    `
    return template;
}
