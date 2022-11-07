const mainSelector = "main > ul > li:nth-of-type";

const painting1 = document.querySelector(mainSelector + "(1) > figure:nth-of-type(1)");
const painting2 = document.querySelector((mainSelector + "(1) > figure:nth-of-type(2)"));
const closet = document.querySelector((mainSelector + "(2) > figure:nth-of-type(1)"));
const bookshelf = document.querySelector((mainSelector + "(2) > figure:nth-of-type(2)"));
const bowlingBall = document.querySelector((mainSelector + "(2) > div"));
const painting3 = document.querySelector((mainSelector + "(3) > figure:nth-of-type(1)"))
const trapDoor = document.querySelector((mainSelector + "(3) > figure:nth-of-type(2)"))

const tom = document.querySelector("main > section:first-of-type > div:first-of-type")
const jerry = document.querySelector("main > section:first-of-type > div:last-of-type")

const itemArray = [painting1, painting2, closet, bookshelf, bowlingBall, painting3, trapDoor]
console.log(itemArray)

painting1.classList.add("wiggle")

let clickCounter = 0;

itemArray.forEach((item, i) => {
    item.addEventListener("click", () =>{

        switch (i) {
            case 0:
                console.log("painting 1")

                if(clickCounter <= 0){
                    painting1.classList.remove("wiggle")
                    painting1.classList.add("painting1-timeline")

                    clickCounter++
                }else {
                    painting1.classList.remove("painting1-timeline")
                    painting2.classList.add("wiggle")
                    clickCounter = 0
                }

                break;
            case 1:
                console.log("painting 2")

                if(clickCounter <= 0){
                    painting2.classList.remove("wiggle")

                    clickCounter++
                }else {
                    closet.classList.add("wiggle")
                    clickCounter = 0
                }
                break;
            case 2:
                console.log("closet")

                if(clickCounter <= 0){
                    closet.classList.remove("wiggle")

                    clickCounter++
                }else {
                    closet.childNodes[3].childNodes[3].classList.add("closet-door")
                    bookshelf.classList.add("wiggle")
                    clickCounter = 0
                }
                break;
            case 3:
            case 4:
                console.log("bowlingball and bookshelf")

                if(clickCounter <= 0){
                    bookshelf.classList.remove("wiggle")

                    clickCounter++
                }else {
                    painting3.classList.add("wiggle")
                    clickCounter = 0
                }
                break;
            case 5:
                console.log("painting 3")

                if(clickCounter <= 0){
                    painting3.classList.remove("wiggle")

                    clickCounter++
                }else {
                    trapDoor.classList.add("wiggle")
                    clickCounter = 0
                }
                break;
            case 6:
                console.log("trap door")

                if(clickCounter <= 0){
                    trapDoor.classList.remove("wiggle")

                    clickCounter++
                }else {
                    clickCounter = 0
                }
                break;
            default:
                console.log("not valid")
        }
    })
})

// let painting1Counter = 0;

// painting1.addEventListener("click", () => {
//     if(painting1Counter <= 0){
//         painting1.classList.remove("wiggle")
//         painting1.classList.add("painting1-timeline")
//         console.log("show text")
//         painting1Counter++
//     }else {
//         console.log("Move character")
//         jerry.classList.add("jerry-1")
//         painting1.classList.remove("painting1-timeline")
//         painting1Counter = 0;

//         painting2.classList.add("wiggle")
//     }
// })

// let painting2Counter = 0;

// painting2.addEventListener("click", () => {
//     if(painting2Counter <= 0){
//         console.log("show text")
//         painting2Counter++
//         painting2.classList.remove("wiggle")
//     }else if (painting2Counter >= 1 && jerry.classList.contains("jerry-1")) {
//         console.log("Move character")
//         painting2.classList.add("painting2-fall")
//         jerry.classList.add("jerry-2")
//         painting2Counter = 0;

//     }
// })

// let closetCounter = 0;

// console.log(closet.childNodes[3].childNodes)

// closet.addEventListener("click", () => {
//     console.log("clicked")
//     if(closetCounter <= 0 && jerry.classList.contains("jerry-2")){
//         closet.childNodes[3].childNodes[3].classList.add("closet-door")
//         closetCounter++
//     }else if (closetCounter >= 1 && jerry.classList.contains("jerry-2")) {
//         // jerry.classList.add("jerry-2")
//         closetCounter = 0;
//     }
// })


// let bookshelfCounter = 0;

// bookshelf.addEventListener("click", () => {
//     console.log("clicked")
//     if(bookshelfCounter <= 0 && jerry.classList.contains("jerry-2")){
//         bookshelfCounter++
//     }else if (bookshelfCounter >= 1 && jerry.classList.contains("jerry-2")) {
//         bookshelf.classList.add("bookshelf-fall")
//         bowlingBall.classList.add("bowlingball-fall")
//         // jerry.classList.add("jerry-2")
//         bookshelfCounter = 0;
//     }
// })
