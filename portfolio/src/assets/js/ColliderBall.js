//Ellipse-Line Intersection equation from
//http://mathworld.wolfram.com/Ellipse-LineIntersection.html
var planet;
var lC = [];

const DARK_PURPLE = "#792BB2";
const BLUE = "#2E42CB";
const PINK = "#F75781";
const PURPLE = "#E365E4";
const ORANGE = "#FA5348";
const DARK_BEIGE = "#DFC7C1";
const BEIGE = "#F4DCD6";
const LIGHT_BLUE = "#B2D9EA";
const MUTED_BLUE = "#84B4C8";
const TURQ = "#619196";
const PASTEL_GREEN = "#D7E7A9";
const LittleCircleColor = [DARK_PURPLE];
const ParticleColor = [PASTEL_GREEN, BEIGE, LIGHT_BLUE];
const LittleCircleOutline = "grey";
const ParticleOutline = BEIGE;

var PARTICLE_NUM = 200;
var CIRCLE_RADIUS = 120;
var TC_MAX = 1;

function setup() {
  createCanvas(500, 500);
  ellipseMode(CORNERS);
  for (let i = 0; i < 30; i++) {
    let fill = random(LittleCircleColor);
    let circle = new LittleCircle(6, 0, LittleCircleOutline, fill);
    lC.push(circle);
  }

  let innerParticles = [];
  for (let j = 0; j < PARTICLE_NUM; j++) {
    let cx = 250 + int(random(-100, 100));
    let cy = 250 + int(random(-100, 100));
    let vx = int(random(50, 300));
    let vy = int(random(50, 300));
    let radius = int(random(2, 7));
    let fill = random(ParticleColor);
    let particle = new Particle(
      radius,
      1,
      ParticleOutline,
      fill,
      cx,
      cy,
      vx,
      vy
    );
    innerParticles.push(particle);
  }

  planet = new Planet(
    width / 2,
    height / 2,
    CIRCLE_RADIUS,
    CIRCLE_RADIUS,
    lC,
    280,
    280,
    50,
    innerParticles
  );
}

function draw() {
  background(0);
  update();
  planet.drawTrace();
  planet.drawParticles();

  //planet.drawLittleCircles();

  // planet.drawLine();
  // planet.drawCurve();
}

function mouseMoved() {
  motion(planet, createVector(mouseX, mouseY));
}

function motion(planet, event) {
  if (planet.lastMouseTime == 0) {
    updateMouseDeterminant(planet, millis(), event);
  }
  const dt = millis() - planet.lastMouseTime;
  if (dt > 0) {
    const result = calcDeterminant(planet, event, dt);
    let determinant, dx, dy, vx, vy;
    [determinant, dx, dy, vx, vy] = [
      result[0],
      result[1],
      result[2],
      result[3],
      result[4],
    ];
    if (planet.lastMouseDeterminant >= 1 && determinant < 1) {
      const nx = planet.cx - planet.lastMouseX;
      const ny = planet.cy - planet.lastMouseY;
      const dot_n_v = nx * vx + ny * vy;
      if (dot_n_v > 0) {
        const nv_x = (dot_n_v / (pow(nx, 2) + pow(ny, 2))) * nx;
        const nv_y = (dot_n_v / (pow(nx, 2) + pow(ny, 2))) * ny;
        const tv_x = vx - nv_x;
        const tv_y = vy - nv_y;
        const inCollisionX = planet.inCollisionX;
        const inCollisionY = planet.inCollisionY;
        if (!inCollisionX && !inCollisionY) {
          updateVXVY(planet, nv_x, nv_y);
        }
        const cross_n_tv = tv_x * ny - tv_y * nx;
        const tv_m = sqrt(tv_x * tv_x + tv_y * tv_y);
        if (cross_n_tv > 0) {
          const aRadius = (planet.rx + planet.ry) / 2;
          const newAV =
            planet.av + (tv_m / aRadius) * planet.mousePlanetAVRatio;
          planet.av = min(planet.maxAngleVelocity, newAV);
        } else if (cross_n_tv < 0) {
          const aRadius = (planet.rx + planet.ry) / 2;
          const newAV =
            planet.av - (tv_m / aRadius) * planet.mousePlanetAVRatio;
          planet.av = max(-planet.maxAngleVelocity, newAV);
        }
      }
    }
    updateLastDeterminant(planet, millis(), event);
  }
}

function update() {
  planet.cx += (planet.vx * frameRate()) / 1000;
  planet.cy += (planet.vy * frameRate()) / 1000;
  planet.angle += (planet.av * frameRate()) / 1000;
  if (planet.av > 0) {
    planet.av -= (planet.ad * frameRate()) / 1000;
    planet.av = max(0, planet.av);
  } else if (planet.av < 0) {
    planet.av += (planet.ad * frameRate()) / 1000;
    planet.av = min(0, planet.av);
  }
  const planetLeft =
    planet.cx - planet.staticRX - planet.littleCircles[0].radius;
  const planetRight =
    planet.cx + planet.staticRX + planet.littleCircles[0].radius;
  if (planetLeft >= 0 && planetRight <= width) {
    sideNoCollision(planet, planetLeft, planetRight);
  } else {
    sideHasCollions(planet, planetLeft, planetRight);
  }

  const planetTop =
    planet.cy - planet.staticRY - planet.littleCircles[0].radius;
  const planetBottom =
    planet.cy + planet.staticRY + planet.littleCircles[0].radius;
  if (planetTop >= 0 && planetBottom <= height) {
    vertNoCollision(planet, planetTop, planetBottom);
  } else {
    verHasCollision(planet, planetTop, planetBottom);
  }
  checkInnerParticles(planet);
}

class Planet {
  constructor(cx, cy, ry, rx, lC, vx, vy, decel, innerParticles) {
    this.cx = cx;
    this.cy = cy;
    this.ry = ry;
    this.rx = rx;
    this.angle = 0; //offset
    this.av = 0;
    this.ad = PI / 6;
    this.maxAngleVelocity = PI;
    this.staticRY = ry;
    this.staticRX = rx;
    this.littleCircles = lC;
    this.vx = vx;
    this.vy = vy;
    this.maxV = 500;
    this.deceleration = decel;
    this.inCollisionX = false;
    this.inCollisionY = false;
    this.collisionXV = 0;
    this.collisionYV = 0;
    this.maxCompression = 0.5;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.lastMouseDeterminant = 0;
    this.lastMouseTime = 0;
    this.mousePlanetVelocityRatio = 1;
    this.mousePlanetAVRatio = 0.15;
    this.innerParticles = innerParticles;
  }

  drawLittleCircles() {
    const a = this.rx;
    const b = this.ry;
    const numCircles = this.littleCircles.length;
    for (let i = 0; i < numCircles; i++) {
      const theta = ((2 * PI) / numCircles) * i + this.angle;
      let y0 = sin(theta) * 100;
      let x0 = cos(theta) * 100;
      let x = (a * b * x0) / sqrt(a * a * y0 * y0 + b * b * x0 * x0) + this.cx;
      let y = (a * b * y0) / sqrt(a * a * y0 * y0 + b * b * x0 * x0) + this.cy;
      let radius = this.littleCircles[i].radius;
      let width = this.littleCircles[i].width;
      let outline = this.littleCircles[i].outline;
      let color = this.littleCircles[i].fill;
      push();
      fill(color);
      stroke(outline);
      ellipse(x - radius, y - radius, x + radius, y + radius);
      pop();
    }
  }

  drawParticles() {
    this.innerParticles.forEach((particle) => {
      const x = particle.cx;
      const y = particle.cy;
      const radius = particle.radius;
      const width = particle.width;
      const outline = particle.outline;
      const color = particle.fill;
      push();
      fill(color);
      stroke(outline);
      strokeWeight(0.5);
      ellipse(x - radius, y - radius, x + radius, y + radius);
      pop();
    });
  }

  drawTrace() {
    this.innerParticles.forEach((particle) => {
      particle.trace.forEach((trace) => {
        trace.draw();
      });
    });
  }

  drawLine() {
    const num = this.innerParticles.length;
    push();
    strokeWeight(1);
    stroke(255);
    for (let i = 0; i < num - 1; i++) {
      line(
        this.innerParticles[i].cx,
        this.innerParticles[i].cy,
        this.innerParticles[i + 1].cx,
        this.innerParticles[i + 1].cy
      );
    }
    pop();
  }

  drawCurve() {
    const num = this.innerParticles.length;
    push();
    strokeWeight(0.5);
    stroke(255);
    noFill();
    for (let i = 0; i < num - 2; i++) {
      triangle(
        this.innerParticles[i].cx,
        this.innerParticles[i].cy,
        this.innerParticles[i + 1].cx,
        this.innerParticles[i + 1].cy,
        this.innerParticles[i + 2].cx,
        this.innerParticles[i + 2].cy
      );
    }
    pop();
  }
}

class LittleCircle {
  constructor(radius, width, outline, fill) {
    this.radius = radius;
    this.width = width;
    this.outline = outline;
    this.fill = fill;
  }
}

class Particle extends LittleCircle {
  constructor(radius, width, outline, fill, cx, cy, vx, vy) {
    super(radius, width, outline, fill);
    this.cx = cx;
    this.cy = cy;
    this.vx = vx;
    this.vy = vy;
    this.trace = [];
  }
  traceUpdate() {
    if (this.trace.length > TC_MAX) {
      this.trace.shift();
    }
    let tc = new Trace(this.cx, this.cy, this.radius / 3);
    this.trace.push(tc);
  }
}

class Trace {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.birthday = millis();
  }

  draw() {
    let now = millis();
    let hasBeen = now - this.birthday;
    let hasBeenPer = hasBeen / 3000;

    if (hasBeenPer > 0 && hasBeenPer < 1) {
      var alpha = map(hasBeenPer, 0, 1, 155, 0);
      var r = map(hasBeenPer, 0, 1, 20, 1);
      push();
      fill(alpha);
      noFill();
      stroke(alpha);
      //noStroke();
      ellipse(
        this.x - this.r,
        this.y - this.r,
        this.x + this.r,
        this.y + this.r
      );

      // ellipse(this.x-this.r, this.y-this.r, width/2+this.r, height/2+this.r); // threads
      pop();
    }
  }
}

function ellipseDeterminant(x, y, h, k, a, b) {
  const determinant = (x - h) ** 2 / pow(a, 2) + pow(y - k, 2) / pow(b, 2);
  return determinant;
}

/*********************  COLLISION CHECKER ********************/
function sideNoCollision(planet, planetLeft, planetRight) {
  if (planet.inCollisionX) {
    planet.inCollisionX = false;
    planet.rx = planet.staticRX;
    planet.vx = -planet.collisionXV;
  }
  if (planet.vx > 0) {
    planet.vx -= (planet.deceleration * frameRate()) / 1000;
    planet.vx = max(0, planet.vx);
  } else if (planet.vx < 0) {
    planet.vx += (planet.deceleration * frameRate()) / 1000;
    planet.vx = min(0, planet.vx);
  }
}

function sideHasCollions(planet, planetLeft, planetRight) {
  if (!planet.inCollisionX) {
    planet.collisionXV = planet.vx;
    planet.inCollisionX = true;
  }

  if (planetRight > width) {
    const ratio = planet.maxV / ((1 - planet.maxCompression) * planet.staticRX);
    const newRX = width - planet.littleCircles[0].radius - planet.cx;
    planet.rx = newRX;

    if (planet.vx > 10) {
      planet.vx = planet.collisionXV - ratio * (planet.staticRX - newRX);
    } else {
      planet.vx = -(planet.collisionXV - ratio * (planet.staticRX - newRX));
    }
  } else if (planetLeft < 0) {
    const ratio = planet.maxV / ((1 - planet.maxCompression) * planet.staticRX);
    const newRX = planet.cx - planet.littleCircles[0].radius;
    planet.rx = newRX;

    if (planet.vx < -10) {
      planet.vx = planet.collisionXV + ratio * (planet.staticRX - newRX);
    } else {
      planet.vx = -(planet.collisionXV + ratio * (planet.staticRX - newRX));
    }
  }
}

function vertNoCollision(planet, planetTop, planetBottom) {
  if (planet.inCollisionY) {
    planet.inCollisionY = false;
    planet.ry = planet.staticRY;
    planet.vy = -planet.collisionYV;
  }

  if (planet.vy > 0) {
    planet.vy -= (planet.deceleration * frameRate()) / 1000;
    planet.vy = max(0, planet.vy);
  } else if (planet.vy < 0) {
    planet.vy += (planet.deceleration * frameRate()) / 1000;
    planet.vy = min(0, planet.vy);
  }
}

function verHasCollision(planet, planetTop, planetBottom) {
  if (!planet.inCollisionY) {
    planet.collisionYV = planet.vy;
    planet.inCollisionY = true;
  }
  if (planetBottom > height) {
    const ratio = planet.maxV / ((1 - planet.maxCompression) * planet.staticRY);
    const newRY = height - planet.littleCircles[0].radius - planet.cy;
    planet.ry = newRY;
    if (planet.vy > 10) {
      planet.vy = planet.collisionYV - ratio * (planet.staticRY - newRY);
    } else {
      planet.vy = -(planet.collisionYV - ratio * (planet.staticRY - newRY));
    }
  } else if (planetTop < 0) {
    const ratio = planet.maxV / ((1 - planet.maxCompression) * planet.staticRY);
    const newRY = planet.cy - planet.littleCircles[0].radius;
    planet.ry = newRY;
    if (planet.vy < -10) {
      planet.vy = planet.collisionYV + ratio * (planet.staticRY - newRY);
    } else {
      planet.vy = -(planet.collisionYV + ratio * (planet.staticRY - newRY));
    }
  }
}

function checkInnerParticles(planet) {
  planet.innerParticles.forEach((particle) => {
    particle.traceUpdate();
    particle.cx += ((planet.vx + particle.vx) * frameRate()) / 1000;
    particle.cy += ((planet.vy + particle.vy) * frameRate()) / 1000;
    const h = planet.cx;
    const k = planet.cy;
    const a = planet.rx - planet.littleCircles[0].radius - particle.radius;
    const b = planet.ry - planet.littleCircles[0].radius - particle.radius;
    const determinant = ellipseDeterminant(
      particle.cx,
      particle.cy,
      h,
      k,
      a,
      b
    );
    if (determinant >= 1) {
      const nx = particle.cx - planet.cx;
      const ny = particle.cy - planet.cy;
      const dot_n_v = nx * particle.vx + ny * particle.vy;
      if (dot_n_v > 0) {
        const nv_x = (dot_n_v / (pow(nx, 2) + pow(ny, 2))) * nx;
        const nv_y = (dot_n_v / (pow(nx, 2) + pow(ny, 2))) * ny;
        const tv_x = particle.vx - nv_x;
        const tv_y = particle.vy - nv_y;
        particle.vx = -nv_x + tv_x;
        particle.vy = -nv_y + tv_y;
      }
      const x0 = nx;
      const y0 = ny;
      const x =
        (a * b * x0) / sqrt(a * a * y0 * y0 + b * b * x0 * x0) + planet.cx;
      const y =
        (a * b * y0) / sqrt(a * a * y0 * y0 + b * b * x0 * x0) + planet.cy;
      particle.cx = x;
      particle.cy = y;
    }
  });
}

/*********************  INTERACTION CHECKER ********************/
function updateMouseDeterminant(planet, event) {
  planet.lastMouseTime = millis();
  planet.lastMouseX = event.x;
  planet.lastMouseY = event.y;
  const a = planet.rx + planet.littleCircles[0].radius;
  const b = planet.ry + planet.littleCircles[0].radius;
  const x = planet.lastMouseX;
  const y = planet.lastMouseY;
  const h = planet.cx;
  const k = planet.cy;
  planet.lastMouseDeterminant = ellipseDeterminant(x, y, h, k, a, b);
}

function updateVXVY(planet, nv_x, nv_y) {
  let newVX = planet.vx + nv_x * planet.mousePlanetVelocityRatio;
  if (newVX > planet.maxV) {
    newVX = planet.maxV;
  } else if (newVX < -planet.maxV) {
    newVX = -planet.maxV;
  }
  let newVY = planet.vy + nv_y * planet.mousePlanetVelocityRatio;
  if (newVY > planet.maxV) {
    newVY = planet.maxV;
  } else if (newVY < -planet.maxV) {
    newVY = -planet.maxV;
  }
  planet.vx = newVX;
  planet.vy = newVY;
}

function calcDeterminant(planet, event, dt) {
  const dx = event.x - planet.lastMouseX;
  const dy = event.y - planet.lastMouseY;
  const vx = round((dx * 1000) / dt);
  const vy = round((dy * 1000) / dt);
  const h = planet.cx;
  const k = planet.cy;
  const a = planet.rx + planet.littleCircles[0].radius;
  const b = planet.ry + planet.littleCircles[0].radius;
  const determinant = ellipseDeterminant(event.x, event.y, h, k, a, b);
  return [determinant, dx, dy, vx, vy];
}

function updateLastDeterminant(planet, milli_sec, event) {
  planet.lastMouseTime = milli_sec;
  planet.lastMouseX = event.x;
  planet.lastMouseY = event.y;
  const a = planet.rx + planet.littleCircles[0].radius;
  const b = planet.ry + planet.littleCircles[0].radius;
  const x = planet.lastMouseX;
  const y = planet.lastMouseY;
  const h = planet.cx;
  const k = planet.cy;
  planet.lastMouseDeterminant = ellipseDeterminant(x, y, h, k, a, b);
}
