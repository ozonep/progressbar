// const percent = document.querySelector(".form-input-percent");
// const hide = document.querySelector(".form-switch-hide");
// const hideLabel = document.querySelector(".form-switch.hide-label");
// const animate = document.querySelector(".form-switch-animate");
// const animateLabel = document.querySelector(".form-switch.animate-label");
// const circle = document.querySelector(".progressbar-svg-bar");
// const cont = document.querySelector(".progressbar-container");
const percentSwitchCont = document.querySelector("#percent-switch");
const hidingSwitchCont = document.querySelector("#hiding-switch");
const animatingSwitchCont = document.querySelector("#animating-switch");
const justTest = document.querySelector(".progress-cont");

const progress = new Progress({
    element: justTest,
    value: 50,
    mode: "animated",
    modeValue: "yes"
});

const percentInput = new Input({
    label: "Value",
    value: 15,
    element: percentSwitchCont,
});

const animatingSwitch = new Switch({
    label: "Animate",
    checked: false,
    element: animatingSwitchCont,
});

const hidingSwitch = new Switch({
    label: "Hide",
    checked: true,
    element: hidingSwitchCont,
});


hidingSwitch.onChange(function(checked) {
    progress.setMod("hidden", checked ? "yes" : "no");
});

animatingSwitch.onChange(function(checked) {
    progress.setMod("animated", checked ? "yes" : "no");
});

percentInput.onChange(function(value) {
    progress.setValue(value);
});




