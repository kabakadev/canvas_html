// Step 1: Simple rectangle
function step1Demo() {
  const canvas = document.getElementById("step1Canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#87CEEB"; // skyblue
  ctx.fillRect(30, 30, 100, 70);

  // Add label
  ctx.fillStyle = "#333";
  ctx.font = "14px Arial";
  ctx.fillText("Sky Blue", 45, 20);
}

// Step 2: Function-based drawing
function step2Demo() {
  const canvas = document.getElementById("step2Canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  function drawColorRectangle(x, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, 30, 80, 70);
    return color;
  }

  drawColorRectangle(50, "#FF5252"); // red
  drawColorRectangle(180, "#448AFF"); // blue

  // Add labels
  ctx.fillStyle = "#333";
  ctx.font = "14px Arial";
  ctx.fillText("Red", 70, 20);
  ctx.fillText("Blue", 200, 20);
}

// Step 3: Multiple rectangles
function step3Demo() {
  const canvas = document.getElementById("step3Canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  function drawColorRectangle(x, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, 30, 80, 70);
  }

  const colors = ["#FF5252", "#448AFF", "#4CAF50", "#FF9800", "#9C27B0"];
  const colorNames = ["Red", "Blue", "Green", "Orange", "Purple"];

  for (let i = 0; i < colors.length; i++) {
    drawColorRectangle(i * 80, colors[i]);
    ctx.fillStyle = "#333";
    ctx.font = "12px Arial";
    ctx.fillText(colorNames[i], i * 80 + 25, 20);
  }
}

// Step 4: Random colors
function step4Demo() {
  const canvas = document.getElementById("step4Canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  function drawColorRectangle(x, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, 30, 80, 70);
  }

  function generateRandomColor() {
    const colors = [
      "#FF5252",
      "#448AFF",
      "#4CAF50",
      "#FF9800",
      "#9C27B0",
      "#FF4081",
      "#FFEB3B",
      "#00BCD4",
      "#E91E63",
      "#8BC34A",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  for (let i = 0; i < 5; i++) {
    const randomColor = generateRandomColor();
    drawColorRectangle(i * 80, randomColor);

    // Add color hex code
    ctx.fillStyle = "#333";
    ctx.font = "12px Arial";
    ctx.fillText(randomColor, i * 80 + 15, 115);
  }
}

function clearStep4() {
  const canvas = document.getElementById("step4Canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Initialize first demo
window.onload = function () {
  step1Demo();
};
