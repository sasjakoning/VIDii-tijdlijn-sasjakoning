const mainSelector = "main > ul > li:nth-of-type";

const painting1 = document.querySelector(mainSelector + "(1) > figure:nth-of-type(1)");
const painting2 = document.querySelector((mainSelector + "(1) > figure:nth-of-type(2)"));
const closet = document.querySelector((mainSelector + "(2) > figure:nth-of-type(1)"));
const bookshelf = document.querySelector((mainSelector + "(2) > figure:nth-of-type(2)"));
const bowlingBall = document.querySelector((mainSelector + "(2) > div"));


const tom = document.querySelector("main > section:first-of-type > div:first-of-type")
const jerry = document.querySelector("main > section:first-of-type > div:last-of-type")

painting1.classList.add("wiggle")

let painting1Counter = 0;

painting1.addEventListener("click", () => {
    if(painting1Counter <= 0){
        painting1.classList.remove("wiggle")
        console.log("show text")
        painting1Counter++
    }else {
        console.log("Move character")
        jerry.classList.add("jerry-1")
        painting1Counter = 0;

        painting2.classList.add("wiggle")
    }
})

let painting2Counter = 0;

painting2.addEventListener("click", () => {
    if(painting2Counter <= 0){
        console.log("show text")
        painting2Counter++
        painting2.classList.remove("wiggle")
    }else if (painting2Counter >= 1 && jerry.classList.contains("jerry-1")) {
        console.log("Move character")
        painting2.classList.add("painting2-fall")
        jerry.classList.add("jerry-2")
        painting2Counter = 0;

    }
})

let closetCounter = 0;

console.log(closet.childNodes[3].childNodes)

closet.addEventListener("click", () => {
    console.log("clicked")
    if(closetCounter <= 0 && jerry.classList.contains("jerry-2")){
        closet.childNodes[3].childNodes[3].classList.add("closet-door")
        closetCounter++
    }else if (closetCounter >= 1 && jerry.classList.contains("jerry-2")) {
        // jerry.classList.add("jerry-2")
        closetCounter = 0;
    }
})


let bookshelfCounter = 0;

bookshelf.addEventListener("click", () => {
    console.log("clicked")
    if(bookshelfCounter <= 0 && jerry.classList.contains("jerry-2")){
        bookshelfCounter++
    }else if (bookshelfCounter >= 1 && jerry.classList.contains("jerry-2")) {
        bookshelf.classList.add("bookshelf-fall")
        bowlingBall.classList.add("bowlingball-fall")
        // jerry.classList.add("jerry-2")
        bookshelfCounter = 0;
    }
})
