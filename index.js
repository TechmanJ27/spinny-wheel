var c = document.getElementById("wheel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 500, 0, 2 * Math.PI);
ctx.stroke();
