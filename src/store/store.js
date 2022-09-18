const store = {
    preventKey: true,
    KeyPress: 0,
    SecondsInTimer: 0,
    Win: false,
    Time: "35",
    Start: false,
    // functions =>
    // -----------------------------------------------------------------------
    ResetCounterKeyPress() {
        this.KeyPress = 0;
    },
    KeyPressincreasing() {
        this.KeyPress += 1;
    },
    PreventKeyTrueFalseSetterFunction(param) {
        let bool = Boolean(param);
        return this.preventKey = bool;
        // declare preventkey equal true or false
    },
    StartKeyTrueFalseSetterFunction(param) {
        let bool = Boolean(param);
        return this.Start = bool;
    }
    // -----------------------------------------------------------------------
    // Global Functions



}
export default store;