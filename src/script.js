const percentSwitchCont = document.querySelector("#percent-switch");
const hidingSwitchCont = document.querySelector("#hiding-switch");
const animatingSwitchCont = document.querySelector("#animating-switch");
const justTest = document.querySelector(".progress-cont");

const progress = new Progress({
    element: justTest,
    value: 100,
    mode: "animated",
    modeValue: ""
});

const percentInput = new Input({
    label: "Value",
    value: 100,
    element: percentSwitchCont,
});

const animatingSwitch = new Switch({
    label: "Animate",
    checked: false,
    element: animatingSwitchCont,
});

const hidingSwitch = new Switch({
    label: "Hide",
    checked: false,
    element: hidingSwitchCont,
});

hidingSwitch.onChange(checked => {
    progress.setMod("hidden", checked ? "yes" : "no");
});

animatingSwitch.onChange(checked => {
    progress.setMod("animated", checked ? "yes" : "no");
});

percentInput.onChange(value => {
    progress.setValue(value);
});
