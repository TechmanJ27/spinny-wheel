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

function drawChoice(pos1, pos2, centerX, centerY) {
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(pos1.x, pos1.y);
  
  ctx.quadraticCurveTo(centerX, centerX, pos2.x, pos2.y);
  
  ctx.closePath();
  
  ctx.fillStyle = '#3498db';
  ctx.fill();
  
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#2980b9';
  ctx.stroke();
}

var c = document.getElementById("wheel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(460, 460, 400, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

var points = getCirclePoints(460, 460, 400, 8);

for (let i = i; i < points.length; i++) {
  drawChoice(points[i-1], points[i], 460, 460);
}
