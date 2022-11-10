const mainSelector = "main > ul > li:nth-of-type";

const camera = document.querySelector("main")

const painting1 = document.querySelector(
  mainSelector + "(1) > figure:nth-of-type(1)"
);
const painting2 = document.querySelector(
  mainSelector + "(1) > figure:nth-of-type(2)"
);
const closet = document.querySelector(
  mainSelector + "(2) > figure:nth-of-type(1)"
);
const bookshelf = document.querySelector(
  mainSelector + "(2) > figure:nth-of-type(2)"
);
const bowlingBall = document.querySelector(mainSelector + "(2) > div");
const painting3 = document.querySelector(
  mainSelector + "(3) > figure:nth-of-type(1)"
);
const trapDoor = document.querySelector(
  mainSelector + "(3) > figure:nth-of-type(2)"
);
const trapDoorDoor = document.querySelector(
  mainSelector + "(3) > figure:nth-of-type(2) > section > div:last-of-type"
);

const basement = document.querySelector(
  mainSelector + "(4) > figure"
);

const logo = document.querySelector("header > img")

const tom = document.querySelector(
  "main > section:first-of-type > button:nth-of-type(1)"
);
const jerry = document.querySelector(
  "main > section:first-of-type > button:nth-of-type(2)"
);

const itemArray = [
  painting1,
  painting2,
  closet,
  bookshelf,
  bowlingBall,
  painting3,
  trapDoor,
];

painting1.classList.add("wiggle");

let clickCounter = 0;
let actionCounter = 0;

itemArray.forEach((item, i) => {
  item.addEventListener("click", () => {
    switch (i) {
      case 0:
        // Painting 1

        if(actionCounter <= 0){
            if (clickCounter <= 0) {
                painting1.classList.remove("wiggle");
                painting1.classList.add("timeline");
      
                clickCounter++;
              } else {
                painting1.classList.remove("timeline");
                painting2.classList.add("wiggle");

                jerry.classList.add("jerry-1");

                setTimeout(() => {
                  camera.classList.add("camera-painting1")
                }, 1000);

                clickCounter = 0;
                actionCounter++;
              }
        }

        break;
      case 1:
        // Painting 2
        if (actionCounter == 1) {
          if (clickCounter <= 0) {
            painting2.classList.remove("wiggle");
            painting2.classList.add("timeline");

            clickCounter++;
          } else {
            closet.classList.add("wiggle");
            painting2.classList.add("painting2-fall");
            painting2.classList.remove("timeline");

            jerry.classList.add("jerry-2");
            setTimeout(() => {
                tom.classList.add("tom-1")
            }, 500);

            setTimeout(() => {
              camera.classList.add("camera-painting2")
            }, 2000);

            clickCounter = 0;
            actionCounter++;
          }
        }
        break;
      case 2:
        // Closet
        
        if(actionCounter == 2){
            if (clickCounter <= 0) {
                closet.classList.remove("wiggle");
                setTimeout(() => {
                    closet.childNodes[5].childNodes[3].classList.add("closet-door-open");
                }, 1700);
                jerry.classList.add("jerry-3");
                setTimeout(() => {
                    tom.classList.add("tom-2")
                    camera.classList.add("camera-closet")
                }, 1000);

                setTimeout(() => {
                  closet.classList.add("timeline");
                }, 2200);

                clickCounter++;
              } else {
                closet.classList.remove("timeline");
                jerry.classList.add("jerry-4"); 

                bookshelf.classList.add("wiggle");

                clickCounter = 0;
                actionCounter++;
              }
        }
        break;
      case 3:
      case 4:
        // Bowlingball and bookshelf
        console.log("click")

        if(actionCounter == 3) {
            if (clickCounter <= 0) {
                bookshelf.classList.remove("wiggle");
                setTimeout(() => {
                  tom.classList.add("tom-3")
                }, 200);

                closet.childNodes[5].childNodes[3].classList.add("closet-door-close");

                setTimeout(() => {
                  bookshelf.classList.add("timelineAlt");
                }, 200);
      
                clickCounter++;
              } else {
                painting3.classList.add("wiggle");
                jerry.classList.add("jerry-5");
                setTimeout(() => {
                    tom.classList.add("tom-4")
                }, 1800);

                bookshelf.classList.remove("timelineAlt");

                bookshelf.classList.add("bookshelf-fall")
                bowlingBall.classList.add("bowlingball-fall")

                setTimeout(() => {
                  camera.classList.add("camera-shelf")
                }, 2000);

                clickCounter = 0;
                actionCounter++;
              }
        }
        break;
      case 5:
        // painting 3

        console.log("click")

        if(actionCounter == 4) {
            if (clickCounter <= 0) {
                painting3.classList.remove("wiggle");
                painting3.classList.add("timeline");
      
                clickCounter++;
              } else {
                trapDoor.classList.add("wiggle");
                jerry.classList.add("jerry-6");
                painting3.classList.remove("timeline");
                setTimeout(() => {
                  tom.classList.add("tom-5")
                }, 500);

                setTimeout(() => {
                  camera.classList.add("camera-painting3")
                }, 1500);

                clickCounter = 0;
                actionCounter++;
              }
        }
        break;
      case 6:
        // Trapdoor
        console.log("click")

        if(actionCounter == 5) {
            if (clickCounter <= 0) {
                trapDoor.classList.remove("wiggle");
                jerry.classList.add("jerry-7");
                trapDoor.classList.add("timelineAlt");
      
                clickCounter++;
              } else {
                jerry.classList.add("jerry-8");
                tom.classList.add("tom-6")
                trapDoor.classList.remove("timelineAlt");

                setTimeout(() => {
                  trapDoorDoor.classList.add("trapdoor-close")
                }, 1200);
                setTimeout(() => {
                  trapDoorDoor.classList.add("trapdoor-open")
                  basement.classList.add("timeline")
                }, 4000);

                setTimeout(() => {
                  camera.classList.add("camera-trapdoor")
                }, 1000);

                
                clickCounter = 0;
                actionCounter++;
              }
        }
        break;
      default:
        console.log("not valid");
    }
  });
});
