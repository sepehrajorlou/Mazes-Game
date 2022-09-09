
import { TopAndBottom, LeftAndRight, result, findAllId, AllId, outOfRange } from './AllFunction.js';
const body = document.querySelector("body");
const container = document.querySelector("#container");
const pointer = document.querySelector("#pointer");

// Get All Id of the boxes =>
findAllId();



body.addEventListener("keyup", (e) => {
    if (e.key == "s" || e.key == "ArrowDown") {
        let style = window.getComputedStyle(pointer);
        let topProperty = style.getPropertyValue('top').replaceAll("px", "");
        pointer.style.top = `${Number(topProperty) + 6}px`;
    } else if (e.key == "d" || e.key == "ArrowRight") {
        let style = window.getComputedStyle(pointer);
        let rightProperty = style.getPropertyValue('left').replaceAll("px", "");
        pointer.style.left = `${Number(rightProperty) + 6}px`;
    } else if (e.key == "w" || e.key == "ArrowUp") {
        let style = window.getComputedStyle(pointer);
        let bottomProperty = style.getPropertyValue('top').replaceAll("px", "");
        pointer.style.top = `${Number(bottomProperty) - 6}px`;
    } else if (e.key == "a" || e.key == "ArrowLeft") {
        let style = window.getComputedStyle(pointer);
        let leftProperty = style.getPropertyValue('left').replaceAll("px", "");
        pointer.style.left = `${Number(leftProperty) - 6}px`;

    } else {
        return null
    }
    AllId.forEach((item, index) => {
        let _id = document.getElementById(item);
        TopAndBottom(_id.getBoundingClientRect().top, _id.getBoundingClientRect().bottom + pointer.getBoundingClientRect().height)
        LeftAndRight(_id.getBoundingClientRect().left, _id.getBoundingClientRect().right + pointer.getBoundingClientRect().height)
        result();
    })

    // container overflow reset => 
    outOfRange()
})
