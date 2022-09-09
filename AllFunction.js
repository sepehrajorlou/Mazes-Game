// Another Functions
var AllId = [];
function findAllId() {
    const main = document.querySelector("main");
    for (let i = 0; i < main.children.length; i++) {
        for (let j = 0; j < main.children[i].children.length; j++) {
            if (main.children[i].children[j].id) {
                AllId.push(main.children[i].children[j].id);
            } else {
                continue;
            }
        }
    }
    // this function is for collectiong boxes Id
}

function playSound() {
    var audio = new Audio('./assets/mixkit-arcade-mechanical-bling-210.mp3');
    audio.play();
}

function resetPointer() {
    // get pointer element in main.js
    pointer.style.top = "25px";
    pointer.style.bottom = "0px";
    pointer.style.left = "0px";
    pointer.style.right = "0px";
}

// ------------------------------------------------------------------------

// Directives =>
var TopBottom = false;
var LeftRight = false;

function TopAndBottom(FirstSize, SecondSize) {
    if (pointer.getBoundingClientRect().bottom >= FirstSize && pointer.getBoundingClientRect().bottom <= SecondSize) {
        return TopBottom = true;
    } else {
        return TopBottom = false;
    }
    // top and bottom Coordinates of the boxes
    // out of range
}

function LeftAndRight(FirstSize, SecondSize) {
    if (pointer.getBoundingClientRect().right >= FirstSize && pointer.getBoundingClientRect().right <= SecondSize) {
        return LeftRight = true;
    } else {
        return LeftRight = false;
    }
    // left and right Coordinates of the boxes
    // out of range
}

function result() {
    if (TopBottom == true && LeftRight == true) {
        // console.log(true)
        // resetRange()
    } else {
        return null
    }
    // determind (left - right) and (top - bottom) Coordinates of boxes
}

function resetRange() {
    playSound();
    setTimeout(() => {
        resetPointer()
        alert("wrong")
    }, 10)
}

function outOfRange() {
    if (!LeftAndRight(container.getBoundingClientRect().left + pointer.getBoundingClientRect().height, container.getBoundingClientRect().right) || !TopAndBottom(container.getBoundingClientRect().top + pointer.getBoundingClientRect().height, container.getBoundingClientRect().bottom)) {
        resetRange()
    } else {
        return null;
    }
    // for left and right container range
}
// ------------------------------------------------------------------------




export { TopAndBottom, LeftAndRight, result, findAllId, AllId, outOfRange };