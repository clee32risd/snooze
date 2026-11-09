let zY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // start the morning with 0 snoozes
  sessionStorage.setItem("snoozes", 0);
}

function draw() {
  // wall and floor
  background(28, 30, 52);
  fill(40, 34, 48);
  rect(0, height * 0.72, width, height * 0.28);

  // window with the moon
  fill(14, 16, 34);
  rect(width * 0.1, height * 0.14, width * 0.18, height * 0.3);
  fill(255, 240, 200);
  circle(width * 0.23, height * 0.23, 40);

  // moonlight on the floor, slowly glowing
  fill(200, 210, 255, 14 + 8 * sin(frameCount * 0.03));
  quad(width * 0.1, height * 0.44, width * 0.28, height * 0.44,
       width * 0.44, height, width * 0.18, height);

  // nightstand and clock
  fill(70, 52, 50);
  rect(width * 0.37, height * 0.58, width * 0.09, height * 0.14, 4);
  fill(30, 28, 36);
  rect(width * 0.38, height * 0.525, width * 0.07, height * 0.055, 6);
  fill(255, 90, 80);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  textSize(20);
  text("6:59", width * 0.415, height * 0.553);

  // bed
  fill(80, 60, 56);
  rect(width * 0.475, height * 0.42, width * 0.025, height * 0.32, 4);
  fill(210, 205, 220);
  rect(width * 0.5, height * 0.58, width * 0.4, height * 0.08, 8);

  // pillow and head
  fill(240, 238, 248);
  ellipse(width * 0.555, height * 0.56, width * 0.085, height * 0.065);
  fill(60, 45, 40);
  circle(width * 0.57, height * 0.54, height * 0.06);

  // blanket moves up and down like breathing
  let breath = sin(frameCount * 0.05) * 5;
  fill(70, 90, 160);
  rect(width * 0.6, height * 0.555 - breath, width * 0.31, height * 0.11 + breath, 12);

  // z floats up and fades
  zY = zY + 1;
  if (zY > 100) {
    zY = 0;
  }
  fill(225, 222, 255, 255 - zY * 2.5);
  textFont("Georgia");
  textSize(26);
  text("z", width * 0.59 + zY * 0.3, height * 0.48 - zY);
}

function mousePressed() {
  window.location.href = "alarm.html";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
