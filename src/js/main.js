// image should be around 1000px
const imagePath = require('../img/img.jpg');
const numberOfSlices = 32;
let gravity = 1;

const wrapper = document.createElement('div');
wrapper.className = 'sliced-wrapper'
const body = document.querySelector('body');
body.appendChild(wrapper);

const original = document.createElement('img');
original.src = imagePath;
original.style.visibility = 'hidden';
wrapper.appendChild(original);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let slices = [];

for (var index = 0; index < numberOfSlices; index++) {
  const img = document.createElement('div');
  wrapper.appendChild(img);
  slices.push({ img, randomY: random(-40, 40) })
}

updateSlices();

function updateSlices() {
  slices.forEach(({ img, randomY }, index) => {
    img.style.transform = `translate3d(0, ${randomY * gravity}px, 0)`;
    img.style.left = `${(index) * (100 / numberOfSlices)}%`;
    img.style.width = `${100 / numberOfSlices}%`;
    img.style.height = '100%';
    img.style.backgroundPositionX = `${(index + 1) * (100 / numberOfSlices)}%`;
    img.style.backgroundPositionY = `${randomY * gravity}px`;
    img.style.backgroundImage = `url(${imagePath})`;
    img.className = 'slice';
  });
}


function update({ clientX }) {
  gravity = clientX/window.innerWidth;
  updateSlices();
}

function keyPressed({keyCode}) {
  if (keyCode === 32) {
    slices = slices.map(slice => {
      slice.randomY = random(-40, 40);
      return slice;
    })
    updateSlices();
  }
}

document.addEventListener('mousemove', update)
document.addEventListener('keyup', keyPressed)