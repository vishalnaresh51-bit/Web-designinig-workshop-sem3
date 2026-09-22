// Imports Event Emitter Class
const EventEmitter = require('events');

// Class
class Button extends EventEmitter{}

// Object
const button = new Button();

// Click Event Listener
button.on('click' , () => {
    console.log("Button Clicked!")
});

// Mouseover Event Listener
button.on('mouseover' , () => {
    console.log("Mouse Is Over The Button.")
});

// Trigger event
button.emit('click');
button.emit('mouseover');