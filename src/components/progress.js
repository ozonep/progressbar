// Progress component that creates circle progressbar from HTML template and puts on page

(function (global) {
    const template = document.querySelector("#progressbar");

    class Progress {
        constructor({element, value = 0, mode, modeValue}) {
            const component = template.content.cloneNode(true);
            const parentNode = element.parentNode;
            this.progressbarCont = component.querySelector(".progressbar-container");
            this.progressbarBar = component.querySelector(".progressbar-svg-bar");

            if (mode) {
                this.setMod(mode, modeValue);
            }
            this.setValue(value);
            parentNode.replaceChild(component, element);
        };

        setMod(mode, value) {
            switch (mode) {
                case "animated":
                    this.progressbarBar.classList.toggle("animation", value === "yes");
                    this.progressbarCont.classList.toggle("nopct", value === "yes");
                    break;
                case "hidden":
                    this.progressbarCont.classList.toggle("invisible", value === "yes");
                    break;
                case "normal":
                    if (value === "yes") {
                        this.progressbarBar.classList.remove("animation");
                        this.progressbarCont.classList.remove("invisible");
                    }
                    break;
                default:
                    console.log("Panic on the board!");
            }
        };

        setValue(value) {
            const percentValue = this.validatePercent(value);
            const radius = this.progressbarBar.getAttribute("r");
            const circumference = Math.PI * (radius * 2);
            const percentage = ((100 - percentValue) / 100) * circumference;
            this.progressbarBar.style.strokeDashoffset = percentage.toString();
            this.progressbarCont.setAttribute("data-pct", percentValue.toString());
        };

        validatePercent(value) {
            const percentValue = parseInt(value);
            if (isNaN(percentValue) || percentValue > 100) {
                return 100;
            } else if (percentValue < 0) {
                return 0;
            }
            return percentValue;
        };
    }

    global.Progress = Progress;
})(window);
