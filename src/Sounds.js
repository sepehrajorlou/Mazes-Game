function playDefeatSound() {
    const audio = new Audio('../assets/sounds/defeat.mp3');
    audio.play();
}

// ---------------------------------------------------
let WinAudio = new Audio('../assets/sounds/win.mp3');
function PlayWinSound() {
    return WinAudio.play();
}
function PauseWinSound() {
    return WinAudio.pause();
}
// ---------------------------------------------------

export { playDefeatSound, PlayWinSound, PauseWinSound };


