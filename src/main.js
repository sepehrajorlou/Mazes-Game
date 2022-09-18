
import { findAllId, AllId , startkeyvisibilitycheck , start } from './General.js';
import { TopAndBottom, LeftAndRight, result, finish, resetRange, outOfRange, resetPointer } from './Directives.js';
import store from './store/store.js';

const body = document.querySelector("body");
const container = document.querySelector("#container");
const pointer = document.querySelector("#pointer");








// Get All Id of the boxes =>
findAllId();

startkeyvisibilitycheck();

start();












body.addEventListener("keydown", (e) => {
    let preventKey = store.preventKey;
    store.KeyPressincreasing();
    if ((e.key == "s" || e.key == "ArrowDown") && !preventKey) {
        let style = window.getComputedStyle(pointer);
        let topProperty = style.getPropertyValue('top').replaceAll("px", "");
        pointer.style.top = `${Number(topProperty) + 6}px`;
    } else if ((e.key == "d" || e.key == "ArrowRight") && !preventKey) {
        let style = window.getComputedStyle(pointer);
        let rightProperty = style.getPropertyValue('left').replaceAll("px", "");
        pointer.style.left = `${Number(rightProperty) + 6}px`;
    } else if ((e.key == "w" || e.key == "ArrowUp") && !preventKey) {
        let style = window.getComputedStyle(pointer);
        let bottomProperty = style.getPropertyValue('top').replaceAll("px", "");
        pointer.style.top = `${Number(bottomProperty) - 6}px`;
    } else if ((e.key == "a" || e.key == "ArrowLeft") && !preventKey) {
        let style = window.getComputedStyle(pointer);
        let leftProperty = style.getPropertyValue('left').replaceAll("px", "");
        pointer.style.left = `${Number(leftProperty) - 6}px`;

    } else {
        return null
    }
    AllId.forEach((item, index) => {
        if (item.slice(0, 6) == "Hurdle") {
            let _id = document.getElementById(item);
            TopAndBottom(_id.getBoundingClientRect().top, _id.getBoundingClientRect().bottom + pointer.getBoundingClientRect().height);
            LeftAndRight(_id.getBoundingClientRect().left, _id.getBoundingClientRect().right + pointer.getBoundingClientRect().height);
            result();
        } else if (item == "finish") {
            const _id = document.getElementById("finish");
            TopAndBottom(_id.getBoundingClientRect().top, _id.getBoundingClientRect().bottom + pointer.getBoundingClientRect().height);
            LeftAndRight(_id.getBoundingClientRect().left, _id.getBoundingClientRect().right + pointer.getBoundingClientRect().height);
            finish()
        } else {
            console.log(false)
        }
    })

    // container overflow reset => 
    outOfRange()
})

