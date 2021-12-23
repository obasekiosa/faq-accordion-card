

window.onload= e => {
    console.log("Win loaded");
    setOnClickEvents();
};

let previous = null;


function setOnClickEvents() {
    let questions = document.querySelectorAll(".question__wrapper");
    if (questions && questions.length > 0) {
        questions.forEach((e) => {
            let question = e.querySelector(".heading");
            question.addEventListener("click", () => makeActive(e));
        })
    }
}

function makeActive(element) {
    if (previous && previous != element) {
        previous.classList.remove("selected");
    }
    element.classList.toggle("selected");

    if (previous !== element) {
        previous = element;
    }
    
}