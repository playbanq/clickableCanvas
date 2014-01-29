/** Creates a tile-based grid and associates it to a canvas element
 * @param {object} canvas - The canvas element object obtained from document.getElementById
 */
var ClickableCanvas = Object.create({}, {
    'extend': {
        value: clickableCanvas
    }
});

function clickableCanvas(canvas) {
    // Validate that the canvas parameter is indeed an existing canvas element
    if (canvas.nodeName !== 'CANVAS') {
        console.log('ERROR: The element provided is not a canvas element.');
        return;
    }

    // Define the canvas object interface
    var properties = {
        'onClick': {
            value: function (callback) {
                var container = canvas.getBoundingClientRect();
                canvas.addEventListener('mousedown', function (event) {
                    callback(event.clientX - container.left, event.clientY - container.top);
                });
            }
        },
        'onMouseMove': {
            value: function (callback) {
                var container = canvas.getBoundingClientRect();
                canvas.addEventListener('mousemove', function (event) {
                    callback(event.clientX - container.left, event.clientY - container.top);
                });
            }
        },
        'onMouseUp': {
            value: function (callback) {
                var container = canvas.getBoundingClientRect();
                canvas.addEventListener('mouseup', function (event) {
                    callback(event.clientX - container.left, event.clientY - container.top);
                });
            }
        },
        'setSize': {
            writable: true,
            value: function (newWidth, newHeight) {
                canvas.width = newWidth || window.innerWidth;
                canvas.height = newHeight || window.innerHeight;
            }
        }
    }

    Object.defineProperties(canvas, properties);

    return Object.create({}, properties);
}