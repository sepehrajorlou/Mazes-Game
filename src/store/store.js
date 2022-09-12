const store = {
    preventKey: false,
    // functions => 
    PreventKeyTrueFalseSetterFunction(param) {
        let bool = Boolean(param);
        return this.preventKey = bool;
        // declare preventkey equal true or false
    },
}
export default store;