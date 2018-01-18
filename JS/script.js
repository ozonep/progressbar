let percent = document.querySelector("#percent");
let circle = document.querySelector("#svg #bar");
let cont = document.querySelector("#cont");

function animate() {
    let val = parseInt(percent.value);
    if (isNaN(val)) {
        val = 100;
    } else {
        let r = circle.getAttribute("r");
        let c = Math.PI*(r*2);
        if (val < 0) {
            val = 0;
        } else if (val > 100) {
            val = 100;
        }
        let pct = ((100-val)/100)*c;
        circle.style.strokeDashoffset = pct.toString();
        cont.setAttribute("data-pct", val.toString());
    }
}

percent.addEventListener("input", animate, false);
