const EventEmitter = require('events');

class Element extends EventEmitter {
    constructor(name, parent) {
        super();
        this.name = name;
        this.parent = parent;
    }

    addEventListener(type, handler) {
        this.on(type, handler);
    }

    removeEventListener(type, handler) {
        this.off(type, handler);
    }

    dispatchEvent(type, data) {
        let event = {
            type: type,
            target: this,
            currentTarget: this,
            data: data,
            stopped: false,

            stopPropagation() {
                this.stopped = true;
            }
        };

        let element = this;

        while (element != null) {
            event.currentTarget = element;
            element.emit(type, event);

            if (event.stopped) {
                break;
            }

            element = element.parent;
        }
    }
}

let documentElement = new Element("document", null);
let form = new Element("form", documentElement);
let button = new Element("button", form);

function buttonClick(event) {
    console.log("Button:", event.target.name, event.currentTarget.name);
}

function formClick(event) {
    console.log("Form:", event.target.name, event.currentTarget.name);
}

function documentClick(event) {
    console.log("Document:", event.target.name, event.currentTarget.name);
}

button.addEventListener("click", buttonClick);
form.addEventListener("click", formClick);
documentElement.addEventListener("click", documentClick);

console.log("Scenario A");
button.dispatchEvent("click", "Hello");

console.log("Scenario B");

form.removeEventListener("click", formClick);

function stopClick(event) {
    console.log("Form:", event.target.name, event.currentTarget.name);
    event.stopPropagation();
}

form.addEventListener("click", stopClick);

button.dispatchEvent("click", "Hello");

console.log("Scenario C");

button.removeEventListener("click", buttonClick);

button.dispatchEvent("click", "Hello");

form.addEventListener("keypress", function(event) {
    console.log("Key pressed:", event.data);
});

console.log("Keypress");
form.dispatchEvent("keypress", "Enter");