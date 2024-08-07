const container = document.querySelector(".container");
const careers = ["YouTuber", "Software Developer", "Instructor", "Web Developer"];

let careerIndex = 0;
let characterIndex = 0;

// Next Task: Add dynamic adding of correct articles for words that start with vowels.

function printText() {

    container.innerHTML = `<h1>I am ${careers[careerIndex] == "Instructor" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    // let article = "a";
    if (characterIndex >= careers[careerIndex].length) {
        characterIndex = 0;
        // article = careers[careerIndex][characterIndex] === "A" || "E" || "I" || "O" || "U" ? "an" : "a";
        // console.log(article)
        careerIndex++;
    }


    // if (characterIndex === 0) {
    //     console.log(careers[careerIndex][characterIndex])
    // }


    if (careerIndex >= careers.length) {
        careerIndex = 0;
        characterIndex = 0;
    }


    characterIndex++;
    setTimeout(printText, 400);
}

printText();