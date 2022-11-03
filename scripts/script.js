const painting1 = document.querySelector("main > ul > li:nth-of-type(1) > figure:nth-of-type(1)");

const tom = document.querySelector("main > section:first-of-type > div:first-of-type")
const jerry = document.querySelector("main > section:first-of-type > div:last-of-type")

// let style = getComputedStyle(document.body)

// console.log(style.getPropertyValue("--x-axis"))
// console.log(style.getPropertyValue("--y-axis"))


let painting1Counter = 0;

painting1.addEventListener("click", () => {
    if(painting1Counter <= 0){
        console.log("show text")
        painting1Counter++
    }else {
        console.log("Move character")
        jerry.classList.add("jerry-1")
        painting1Counter = 0;

    }
})