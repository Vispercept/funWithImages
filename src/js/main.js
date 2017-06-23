import onScroll from './onScroll';
const imagePath = require('../img/1.jpg');
const numberOfSlices = 10;
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

initSlices();
updateSlices();

function initSlices() {
  slices.forEach(({ img, randomY }, index) => {
    img.style.backgroundImage = `url(${imagePath})`;
    img.style.webkitClipPath = `
      polygon(
        ${index*(100/numberOfSlices)}% 0%,
        ${(index+1)*(100/numberOfSlices)}% 0%,
        ${(index+1)*(100/numberOfSlices)}% 100%,
        ${(index)*(100/numberOfSlices)}% 100%)`;
    img.className = 'slice';
  });
}

function updateSlices() {
  slices.forEach(({ img, randomY }, index) => {
    img.style.transform = `translate3d(0, ${randomY * gravity}px, 0)`;
  });
}


function easeOutQuad(t) {
  return t*(2-t)
}

function update({ y }) {
  gravity = y/100;
  updateSlices();
}

function doRandomness() {
  slices = slices.map(slice => {
    slice.randomY = random(-40, 40);
    return slice;
  })
  updateSlices();
}

function keyPressed({keyCode}) {
  if (keyCode === 32) {
    doRandomness();
  }
}

document.addEventListener('keyup', keyPressed);
onScroll(update);