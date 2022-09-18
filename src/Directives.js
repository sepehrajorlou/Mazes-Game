import { playDefeatSound, PlayWinSound, PauseWinSound } from './Sounds.js';
import { modalWin, modalDefeat, } from './modal.js'
import store from './store/store.js';


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
        console.log(true);
        resetRange();
        Timer(null,true)
    } else {
        return null;
    }
    // determind (left - right) and (top - bottom) Coordinates of boxes
}

function finish() {

    if (TopBottom == true && LeftRight == true) {

        modalWin();
    } else {
        return null;
    }
    // determind (left - right) and (top - bottom) Coordinates of boxes

}

function resetRange() {
    playDefeatSound();
    store.PreventKeyTrueFalseSetterFunction(true);
    setTimeout(() => {
        modalDefeat();
        resetPointer();

    }, 10)
}

function outOfRange() {
    if (!LeftAndRight(container.getBoundingClientRect().left + pointer.getBoundingClientRect().height, container.getBoundingClientRect().right) || !TopAndBottom(container.getBoundingClientRect().top + pointer.getBoundingClientRect().height, container.getBoundingClientRect().bottom)) {
        resetRange();
    } else {
        return null;
    }
    // for left and right container range
}
function resetPointer() {
    // get pointer element in main.js
    pointer.style.top = "25px";
    pointer.style.bottom = "0px";
    pointer.style.left = "0px";
    pointer.style.right = "0px";
}

function Timer(time, exit) {
    const timerSelect = document.querySelector("#timerSelect");
    let sec = time;
    const Time = setInterval(function () {
        sec--;
        timerSelect.innerHTML = sec;
        store.TimeSecond = "0";
        if (sec <= 0) {
            clearInterval(Time);
            if (exit) {
                store.TimeSecond = "0";
            } else if (sec <= 0 && !store.Win) {
                resetRange();
            } else {
                return;
            }
        }
        if (exit) {
            return;
        }
    }, 1000);
}

export { TopAndBottom, LeftAndRight, result, finish, resetRange, outOfRange, resetPointer, Timer };