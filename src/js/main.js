const img1 = require('../img/Faces__1.png');
var img = document.createElement('img');
img.src = img1;
img.className = 'image';

var body = document.querySelector('body');
body.appendChild(img);

console.log('hello');