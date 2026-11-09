// dead end: no way out of this page

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(8, 8, 12);

  // time
  fill(255, 90, 80);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  textSize(90);
  text("12:30", width / 2, height * 0.18);

  // glow from the phone
  fill(200, 210, 255, 15 + 8 * sin(frameCount * 0.05));
  ellipse(width / 2, height * 0.55, 420, 460);

  // phone
  fill(30, 28, 36);
  rect(width / 2 - 120, height * 0.33, 240, 320, 22);
  fill(28, 30, 52);
  rect(width / 2 - 108, height * 0.33 + 12, 216, 296, 14);

  // notifications blink
  if (frameCount % 60 < 40) {
    fill(225, 222, 255);
    textFont("Georgia");
    textSize(16);
    text("12 missed calls", width / 2, height * 0.33 + 60);
    text("Class started at 9:00", width / 2, height * 0.33 + 110);
    text("Where are you??", width / 2, height * 0.33 + 160);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
