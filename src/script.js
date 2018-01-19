const percent = document.querySelector(".form-input-percent");
const hide = document.querySelector(".form-switch-hide");
const hideLabel = document.querySelector(".form-switch.hide-label");
const animate = document.querySelector(".form-switch-animate");
const animateLabel = document.querySelector(".form-switch.animate-label");
const circle = document.querySelector(".progressbar-svg-bar");
const cont = document.querySelector(".progressbar-container");

function animateCircle() {
    let val = parseInt(percent.value);
    if (isNaN(val) || val > 100) {
        val = 100;
    } else if (val < 0) {
        val = 0;
    }
    let r = circle.getAttribute("r"); //getting radius from attribute
    let c = Math.PI*(r*2);            //calculating the circumference of a circle based on radius
    let pct = ((100-val)/100)*c;      //calculating percentage display
    circle.style.strokeDashoffset = pct.toString();
    cont.setAttribute("data-pct", val.toString());
}


const percentSwitchCont = document.querySelector("#percent-switch");
const hidingSwitchCont = document.querySelector("#hiding-switch");
const animatingSwitchCont = document.querySelector("#animating-switch");

const animatingSwitch = new Switch({
    label: "Animate",
    checked: false,
    element: animatingSwitchCont,
});
animatingSwitch.onChange(function(checked) {
    if (checked) {
        circle.classList.add("animation");
    } else {
        circle.classList.remove("animation");
    }
});
const hidingSwitch = new Switch({
    label: "Hide",
    checked: true,
    element: hidingSwitchCont,
});
hidingSwitch.onChange(function(checked) {
    if (checked) {
        cont.classList.add("invisible");
    } else {
        cont.classList.remove("invisible");
    }
});

let progress = new Progress();
Progress.setMod("animated", "yes");







// percent.addEventListener("input", animateCircle, false);

