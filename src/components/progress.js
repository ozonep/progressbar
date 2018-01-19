(function (global) {
    class Progress {
        static setMod(animated, trueFalse) {
            let animationStatus = document.querySelector(".form-switch__input.animate");
            animationStatus.checked = trueFalse === "yes";
        }
        static setValue(val) {
            let percentVal = document.querySelector(".form-input__percent");
            percentVal.value = val;
        }
    }
    global.Progress = Progress;
})(window);