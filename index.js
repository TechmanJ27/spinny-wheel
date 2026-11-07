var c = document.getElementById("wheel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(440, 345, 400, 0, 2 * Math.PI);
ctx.stroke();
