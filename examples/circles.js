var canvas = document.getElementById('clickableCanvas'),
    context = canvas.getContext('2d');
ClickableCanvas.extend(canvas);
canvas.setSize();
canvas.onClick(function (x, y) {
    context.beginPath();
    context.fillStyle = '#ccc';
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.fill();
});