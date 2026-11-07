var c = document.getElementById("wheel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(500, 500, 450, 0, 2 * Math.PI);
ctx.stroke();
