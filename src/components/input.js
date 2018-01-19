(function (global) {
    const template = document.querySelector("#form-input");

    class Input {
        constructor({element, label = "", value = 0}) {
            const component = template.content.cloneNode(true);
            const parentNode = element.parentNode;
            this.labelText = component.querySelector(".form-switch__label");
            this.labelPercent = component.querySelector(".form-input__percent");
            this.setLabel(label);
            this.setValue(value);
            parentNode.replaceChild(component, element);
        }

        setLabel(name) {
            this.labelText.innerText = name;
        }

        setValue(value) {
            this.labelPercent.value = value;
        }

        onChange(func) {
            this.labelPercent.addEventListener("input", () => {
                func(this.labelPercent.value);
            }, false);
        }
    }

    global.Input = Input;
})(window);