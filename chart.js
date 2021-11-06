// Seelct Charts
const chart = document.querySelector(".chart");

// Canvas
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// add canvas
chart.appendChild(canvas);

// Darw canvas
const ctx = canvas.getContext("2d");

ctx.lineWidth = 8;

// Circle radius
const R = 20;

function drawCircle(color, ratio, anticlockwise){

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart( income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#FFFFFF", - ratio, true);
    drawCircle("#F0624D", 1 - ratio, false);
}