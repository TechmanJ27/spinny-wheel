function getCirclePoints(centerX, centerY, radius, numPoints) {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i * 2 * Math.PI) / numPoints;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x: x, y: y });
  }
  return points;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawChoice(startAngle, endAngle, centerX, centerY, radius) {
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);

  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();

  ctx.fillStyle = getRandomColor();
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#2980b9';
  ctx.stroke();
}

const c = document.getElementById("wheel");
const ctx = c.getContext("2d");

const centerX = 460;
const centerY = 460;
const radius = 400;
const numSlices = 8;
const sliceAngle = (2 * Math.PI) / numSlices;

for (let i = 0; i < numSlices; i++) {
  const startAngle = i * sliceAngle;
  const endAngle = (i + 1) * sliceAngle;
  drawChoice(startAngle, endAngle, centerX, centerY, radius);
}
