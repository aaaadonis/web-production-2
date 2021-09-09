const Y_AXIS = 1;
const X_AXIS = 2;
let value = 0;
let a1, a2;

function setup() {
  createCanvas(windowWidth, 600);

  a1 = color(217, 175, 217);
  a2 = color(151, 217, 225);
}

function draw() {
  setGradient(0, 0, width, height, a1, a2, Y_AXIS);

  fill(value, value/5, value/2)
  mouseMoved()
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function mouseMoved() {
  value = value + 2.5;
  if (value > 255) {
    value = 0;
  }
  ellipse(mouseX, mouseY, 80, 80);
  // prevent default
  return false;
}
