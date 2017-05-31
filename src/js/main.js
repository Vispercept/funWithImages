const imagePath = require('../img/img.jpg');
const numberOfSlices = 20;

const wrapper = document.createElement('div');
wrapper.className = 'sliced-wrapper'
const body = document.querySelector('body');
body.appendChild(wrapper);

const original = document.createElement('img');
original.src = imagePath;
original.style.width = '100%';
original.style.visibility = 'hidden';
original.style.position = 'absolute';
wrapper.appendChild(original);
console.log(original.getBoundingClientRect());



for (var index = 0; index < numberOfSlices; index++) {
  const img = document.createElement('div');
  img.style.left = `${(index)*(100/numberOfSlices)}%`;
  img.style.width = `${100/numberOfSlices}%`;
  img.style.height = '100%';
  img.style.backgroundPositionX = `${(index+1)*(100/numberOfSlices)}%`;
  img.style.backgroundImage = `url(${imagePath})`;
  img.className = 'slice';
  wrapper.appendChild(img);
}
