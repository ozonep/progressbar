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
    let r = circle.getAttribute("r");
    let c = Math.PI*(r*2);
    let pct = ((100-val)/100)*c;
    circle.style.strokeDashoffset = pct.toString();
    cont.setAttribute("data-pct", val.toString());
}

percent.addEventListener("input", animateCircle, false);

hideLabel.addEventListener("click", function() {
    if (hide.checked) {
        cont.classList.add("invisible");
    } else {
        cont.classList.remove("invisible");
    }
}, false);

animateLabel.addEventListener("click", function() {
    if (animate.checked) {
        circle.classList.add("animation");
    } else {
        circle.classList.remove("animation");
    }
}, false);