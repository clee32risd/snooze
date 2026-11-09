let snoozes;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  snoozes = Number(sessionStorage.getItem("snoozes"));
}

function draw() {
  // soft early morning: lavender wall, warm floor
  background(70, 66, 110);
  fill(90, 70, 80);
  rect(0, height * 0.72, width, height * 0.28);

  // window with the rising sun
  fill(250, 200, 190);
  rect(width * 0.1, height * 0.14, width * 0.18, height * 0.3);
  let sunSize = 60 + sin(frameCount * 0.05) * 8;
  fill(255, 240, 200, 80);
  circle(width * 0.19, height * 0.32, sunSize * 1.8);
  fill(255, 240, 200);
  circle(width * 0.19, height * 0.32, sunSize);

  // sunlight on the floor
  fill(255, 240, 200, 30);
  quad(width * 0.1, height * 0.44, width * 0.28, height * 0.44,
       width * 0.44, height, width * 0.18, height);

  // empty bed (click anywhere to go back to it)
  fill(80, 60, 56);
  rect(width * 0.475, height * 0.42, width * 0.025, height * 0.32, 4);
  fill(210, 205, 220);
  rect(width * 0.5, height * 0.58, width * 0.4, height * 0.08, 8);
  fill(240, 238, 248);
  ellipse(width * 0.555, height * 0.56, width * 0.085, height * 0.065);
  fill(70, 90, 160);
  rect(width * 0.75, height * 0.565, width * 0.16, height * 0.1, 12);

  // message
  fill(255, 240, 200);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  textStyle(ITALIC);
  textSize(44);
  text("You're up.", width * 0.65, height * 0.22);
  fill(225, 222, 255);
  textSize(22);
  text("You pressed snooze " + snoozes + " times.", width * 0.65, height * 0.3);
}

function mousePressed() {
  window.location.href = "index.html";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
