(function (global) {
    const template = document.querySelector("#form-switch");
    class Switch {
        constructor({element, label = "", checked = false}) {
            const component = template.content.cloneNode(true);
            const parentNode = element.parentNode;
            this.labelText = component.querySelector(".form-switch__label");
            this.labelChecked = component.querySelector(".form-switch__input");
            this.setLabel(label);
            this.setValue(checked);
            parentNode.replaceChild(component, element);
        }
        setLabel(name) {
            this.labelText.innerText = name;
        }
        setValue(checked) {
            this.labelChecked.checked = checked;
        }
        onChange(func) {
            this.labelChecked.addEventListener("change", () => {
                func(this.labelChecked.checked);
            }, false);
        }
    }
    global.Switch = Switch;
})(window);