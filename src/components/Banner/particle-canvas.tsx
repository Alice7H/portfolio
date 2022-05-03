export function init() {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const fps = 50;
  const particlesOnScreen = 100;
  let particlesArray = [
    { x: 0, y: 0, opacity: 0, speedX: 0, speedY: 0, radius: 0 },
  ];
  let w: number, h: number;

  if (ctx === null)
    throw new Error(
      "This browser does not support 2-dimensional canvas rendering contexts."
    );
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  function random(min: number, max: number) {
    return min + Math.random() * (max - min + 1);
  }

  function clientResize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", clientResize);

  function createSnowFlakes() {
    for (var i = 0; i < particlesOnScreen; i++) {
      particlesArray.push({
        x: Math.random() * w,
        y: Math.random() * h,
        opacity: Math.random(),
        speedX: random(-11, 11),
        speedY: random(1, 5),
        radius: random(0.5, 4.2),
      });
    }
  }

  function drawSnowFlakes() {
    for (let i = 0; i < particlesArray.length; i++) {
      let gradient = ctx.createRadialGradient(
        particlesArray[i].x, // The x-axis coordinate of the start circle.
        particlesArray[i].y, // The y-axis coordinate of the start circle.
        0, // The radius of the start circle.
        particlesArray[i].x, // The x-axis coordinate of the end circle.
        particlesArray[i].y, // The y-axis coordinate of the end circle.
        particlesArray[i].radius // The radius of the end circle
      );

      gradient.addColorStop(
        0,
        "rgba(255, 255, 255," + particlesArray[i].opacity + ")"
      ); // white
      gradient.addColorStop(
        0.8,
        "rgba(210, 236, 242," + particlesArray[i].opacity + ")"
      ); // bluish
      gradient.addColorStop(
        1,
        "rgba(237, 247, 249," + particlesArray[i].opacity + ")"
      ); // lighter bluish

      ctx.beginPath();

      ctx.arc(
        particlesArray[i].x, // The x-axis (horizontal) coordinate of the arc's center.
        particlesArray[i].y, // The y-axis (vertical) coordinate of the arc's center.
        particlesArray[i].radius, // The radius. Must be non-negative.
        0, // The angle at which the arc starts,
        Math.PI * 2, // The angle at which the arc ends
        false //  parametar whitch indicates wether the arc to be drawn counter-clockwise
      );

      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }

  function moveSnowFlakes() {
    for (var i = 0; i < particlesArray.length; i++) {
      particlesArray[i].x += particlesArray[i].speedX;
      particlesArray[i].y += particlesArray[i].speedY;

      if (particlesArray[i].y > h) {
        particlesArray[i].x = Math.random() * w * 1.5;
        particlesArray[i].y = -50;
      }
    }
  }

  function updateSnowFall() {
    ctx.clearRect(0, 0, w, h);
    drawSnowFlakes();
    moveSnowFlakes();
  }
  setInterval(updateSnowFall, fps);
  createSnowFlakes();
}
window.onload = init;
