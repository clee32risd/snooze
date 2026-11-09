let snoozes;
let startTime;
let dreamTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  snoozes = Number(sessionStorage.getItem("snoozes"));

  // eyes close faster every snooze
  dreamTime = 10000 - snoozes * 1500;
  startTime = millis();
}

function draw() {
  // eyes closing: 0 = open, 1 = closed
  let progress = (millis() - startTime) / dreamTime;
  let eyeH = height * (1 - progress);

  // eyelids: deep night blue
  background(11, 13, 22);

  // only draw the room inside the eye-shaped hole
  push();
  beginClip();
  fill(255);
  ellipse(width / 2, height / 2, width * 1.2, eyeH);
  endClip();

  // wall and floor
  background(28, 30, 52);
  fill(40, 34, 48);
  rect(0, height * 0.72, width, height * 0.28);

  // window: the sky gets lighter every snooze (morning is coming)
  fill(14 + snoozes * 25, 16 + snoozes * 25, 34 + snoozes * 25);
  rect(width * 0.6, height * 0.15, width * 0.22, height * 0.36);

  // light from the window on the floor
  fill(255, 240, 200, 10 + snoozes * 8);
  quad(width * 0.6, height * 0.51, width * 0.82, height * 0.51,
       width * 0.72, height, width * 0.42, height);

  // alarm clock on the nightstand, glowing red
  fill(70, 52, 50);
  rect(width * 0.2, height * 0.58, width * 0.22, height * 0.42);
  fill(255, 90, 80, 25);
  ellipse(width * 0.31, height * 0.5, width * 0.3, height * 0.22);
  fill(30, 28, 36);
  rect(width * 0.23, height * 0.44, width * 0.16, height * 0.12, 10);
  fill(255, 90, 80);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  textSize(height * 0.07);
  text("7:" + nf(snoozes * 5, 2), width * 0.31, height * 0.5);
  pop();

  // soft lavender line at the edge of the eyelids
  noFill();
  stroke(225, 222, 255, 60);
  strokeWeight(4);
  ellipse(width / 2, height / 2, width * 1.2, eyeH);
  noStroke();

  // eyes closed: back to the alarm
  if (progress > 1) {
    window.location.href = "alarm.html";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
