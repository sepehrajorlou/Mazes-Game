import { playDefeatSound, PlayWinSound, PauseWinSound } from './Sounds.js';
import { resetPointer } from './Directives.js';
import store from './store/store.js';




function modalWin() {
    const modal = document.querySelector("#myModal1");
    const close = document.querySelector(".close1");
    const Reset = document.querySelector(".Reset");
    modal.style.display = "block";
    // preventKey = true;
    store.PreventKeyTrueFalseSetterFunction(true);
    PlayWinSound();
    Reset.onclick = () => {
        modal.style.display = "none";
        resetPointer();
        PauseWinSound();
        // preventKey = false;
        store.PreventKeyTrueFalseSetterFunction(false);

    }
    // Win modal function 
}
function modalDefeat() {
    const modal = document.querySelector("#myModal");
    const close = document.querySelector(".close");
    modal.style.display = "block";
    close.onclick = () => {
        modal.style.display = "none";
        // preventKey = false;
        store. PreventKeyTrueFalseSetterFunction(false);
    }
    // defeat modal function 
}
export { modalWin, modalDefeat }