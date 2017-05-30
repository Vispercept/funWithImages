const body = document.querySelector('body');
const imagePath = require('../img/img.jpg');

const img = document.createElement('img');
img.src = imagePath;
img.className = 'image';
body.appendChild(img);

const img2 = document.createElement('img');
img2.src = imagePath;
img2.className = 'image';
body.appendChild(img2);

