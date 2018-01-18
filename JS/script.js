const percent = document.querySelector(".form-input-percent");
const circle = document.querySelector(".progressbar-svg-bar");
const cont = document.querySelector(".progressbar-container");

function animate() {
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

percent.addEventListener("input", animate, false);
