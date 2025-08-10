const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//draw rectangle
ctx.fillStyle = "skyblue"; //fill color
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.fillRect(30, 30, 100, 70); // x,y,width, height
ctx.strokeRect(30, 30, 100, 70);

//draw circle
ctx.beginPath();
ctx.arc(250, 80, 40, 0, Math.PI * 2); // x,y radius, start angle,end angle
ctx.fillStyle = "lightgreen";
ctx.fill();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.stroke();

function drawColorRectangle(x, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, 30, 80, 70); // x position changes, others stay the same
  return color;
}
const colors = ["red", "blue", "green", "orange", "purple"]; //Loop to draw each one

function drawMultipleRectangles() {
  for (let i = 0; i < colors.length; i++) {
    drawColorRectangle(i, colors[i]);
  }
}
