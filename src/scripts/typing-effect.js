import { occupations } from "../data/words.js"

let index = 0;
const element = document.getElementById("typing")

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);        
    })
}

const typingLoop = async () => {
  while (true) {
    let curWords = occupations[index];

    for (let i = 0; i < curWords.length; i++) {
        element.innerText = curWords.substring(0, i + 1);
        await sleep(50);
    }
    
    await sleep(2000);
    
    for (let i = curWords.length; i > 0; i--) {
        element.innerText = curWords.substring(0, i - 1);
        await sleep(50);
    }
    
    await sleep(500);

    if (index === occupations.length - 1) {
        index = 0;
    } else {
        index++;
    }
  }  
};

typingLoop();