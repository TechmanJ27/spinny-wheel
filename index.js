var c = document.getElementById("wheel");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(460, 460, 400, 0, 2 * Math.PI);
ctx.stroke();
