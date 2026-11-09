let snoozes;
let alarm;

let wakeX;
let wakeY;
let runs = 0;

let dust = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  snoozes = Number(sessionStorage.getItem("snoozes"));

  // alarm gets louder every snooze
  alarm = new Audio("alarm.mp3");
  alarm.loop = true;
  alarm.volume = 0.3 + snoozes * 0.1;
  alarm.play();

  wakeX = width * 0.7;
  wakeY = height * 0.75;

  // floating dust
  for (let i = 0; i < 60; i++) {
    dust.push({ x: random(width), y: random(height) });
  }
}

function draw() {
  // dark purple night, a little redder every snooze
  background(22 + snoozes * 12, 16, 40);

  // dust floats up
  fill(210, 200, 255, 100);
  for (let i = 0; i < dust.length; i++) {
    circle(dust[i].x, dust[i].y, 2);
    dust[i].y = dust[i].y - 0.5;
    if (dust[i].y < 0) {
      dust[i].y = height;
    }
  }

  // clock shakes more every snooze
  let shake = 2 + snoozes * 3;
  let x = width / 2 + random(-shake, shake);
  let y = height * 0.35 + random(-shake, shake);

  // glow behind the clock
  fill(255, 90, 80, 20 + 10 * sin(frameCount * 0.2));
  ellipse(x, y, 480, 280);

  // clock
  fill(30, 28, 36);
  rect(x - 170, y - 80, 340, 160, 20);
  fill(255, 90, 80);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  textSize(80);
  text("7:" + nf(snoozes * 5, 2), x, y);

  // snooze button (soft lavender, gently glowing)
  fill(190, 180, 220, 40);
  rect(width * 0.3 - 135, height * 0.75 - 55, 270, 110, 30);
  fill(190, 180, 220);
  rect(width * 0.3 - 120, height * 0.75 - 40, 240, 80, 20);
  fill(22, 16, 40);
  textFont("Georgia");
  textSize(30);
  text("SNOOZE", width * 0.3, height * 0.75 - 10);
  textStyle(ITALIC);
  textSize(14);
  text("five more minutes", width * 0.3, height * 0.75 + 20);
  textStyle(NORMAL);

  // wake up button (warm moon color)
  fill(255, 240, 200);
  rect(wakeX - 80, wakeY - 30, 160, 60, 15);
  fill(60, 45, 40);
  textSize(20);
  text("WAKE UP", wakeX, wakeY);
}

// wake up button runs away 7 times
function mouseMoved() {
  if (runs < 7 && dist(mouseX, mouseY, wakeX, wakeY) < 100) {
    wakeX = random(100, width - 100);
    wakeY = random(50, height * 0.5);
    runs = runs + 1;
  }
}

function mousePressed() {
  // clicked snooze?
  if (mouseX > width * 0.3 - 120 && mouseX < width * 0.3 + 120 &&
      mouseY > height * 0.75 - 40 && mouseY < height * 0.75 + 40) {
    snoozes = snoozes + 1;
    sessionStorage.setItem("snoozes", snoozes);
    if (snoozes >= 6) {
      window.location.href = "late.html";
    } else {
      window.location.href = "dream.html";
    }
  }

  // clicked wake up?
  if (mouseX > wakeX - 80 && mouseX < wakeX + 80 &&
      mouseY > wakeY - 30 && mouseY < wakeY + 30) {
    window.location.href = "awake.html";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
