const container = document.querySelector(".container");
const careers = ["YouTuber", "Software Developer", "Instructor", "Web Developer"];

let careerIndex = 0;
let characterIndex = 0;


function printText() {
    container.innerHTML = `<h1>I am ${article} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    if (characterIndex >= careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
        console.log(careerIndex)
    }

    if (careerIndex >= careers.length) {
        careerIndex = 0;
        characterIndex = 0;
    }
    characterIndex++;
    setTimeout(printText, 400);
}

printText();