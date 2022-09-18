import { Timer } from "./Directives.js";
import store from "./store/store.js";

var AllId = [];
function findAllId() {
    const main = document.querySelector("main");
    for (let i = 0; i < main.children.length; i++) {
        for (let j = 0; j < main.children[i].children.length; j++) {
            if (main.children[i].children[j].id) {
                AllId.push(main.children[i].children[j].id);
            }
            else {
                continue;
            }
        }
    }
    // this function is for collecting boxes Id
}
function startkeyvisibilitycheck() {
    const startkey = document.querySelector("#start");
    if (store.Start) {
        startkey.style.display = "none";
    } else {
        startkey.style.display = "block";
    }
}
function start() {
    const startkey = document.querySelector("#start");
    startkey.onclick = () => {
        store.StartKeyTrueFalseSetterFunction(true);
        store.PreventKeyTrueFalseSetterFunction(false);
        Timer(store.Time);
        setTimeout(() => {
            startkeyvisibilitycheck();
        }, 10)
    }
}




export { findAllId, AllId, startkeyvisibilitycheck  , start};