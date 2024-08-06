const container = document.querySelector(".container");
const h1 = container.querySelector("h1")
const careers = ["YouTuber", "Software Developer", "Instructor", "Web Developer"];


container.innerHTML = `<h1> I am a ${careers[0]}</h1>`


// let careersIndex = 0;
// let careerCharIndex = 0;

// setInterval(() => {


//     if (careerCharIndex >= careers[careersIndex].length) {
//         careerCharIndex = 0
//         let contentLength = h1.innerHTML.length;
//         let wordLength = careers[careersIndex].length;
//         let diff = contentLength - wordLength;
//         h1.innerHTML = h1.innerHTML.slice(0, diff);
//         careersIndex++;
//     }

//     if (careersIndex >= careers.length) {
//         careersIndex = 0;
//     }

//     h1.innerHTML += careers[careersIndex][careerCharIndex];

//     careerCharIndex++;
// }, 500);


// Using recursion
