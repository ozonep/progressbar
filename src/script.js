const percentSwitchCont = document.querySelector("#percent-switch");
const hidingSwitchCont = document.querySelector("#hiding-switch");
const animatingSwitchCont = document.querySelector("#animating-switch");
const progressCont = document.querySelector(".progress-cont");

// Creates progressbar instance with given values
const progress = new Progress({
    element: progressCont,
    value: 100,
    mode: "animated",
    modeValue: ""
});

// Creates percent input instance
const percentInput = new Input({
    label: "Value",
    value: 100,
    element: percentSwitchCont,
});

// Creates animation switch component with given values
const animatingSwitch = new Switch({
    label: "Animate",
    checked: false,
    element: animatingSwitchCont,
});

// Creates hide switch with given values
const hidingSwitch = new Switch({
    label: "Hide",
    checked: false,
    element: hidingSwitchCont,
});

//Adding eventlisteners to all inputs so they change progressbar display
hidingSwitch.onChange(checked => {
    progress.setMod("hidden", checked ? "yes" : "no");
});

animatingSwitch.onChange(checked => {
    progress.setMod("animated", checked ? "yes" : "no");
});

percentInput.onChange(value => {
    progress.setValue(value);
});
