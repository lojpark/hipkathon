var meow1 = new Audio('assets/sounds/meow1.mp3');
var meow2 = new Audio('assets/sounds/meow2.mp3');

function meow() {
    if (Math.random() < 0.5) {
        meow1.play();
    } else {
        meow2.play();
    }
}