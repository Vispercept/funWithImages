const slippTimes = 10;
let slippers;
let slipper;
let RIGHT_BORDER;
let BOTTOM_BORDER;
const MIN_WIDTH = 100;
const MAX_WIDTH = 300;
const MIN_HEIGHT = 100;
const MAX_HEIGHT = 300;


function createSlippers() {
  for (let i = 0; i < slippTimes; i++) {
    slippers.appendChild(slipper.cloneNode(true));
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyCrazyness() {
  [].forEach.call(slippers.children, (slipp, i) => {
    if (i !== 0) {
      slipp.style.width = `${random(MIN_WIDTH, MAX_WIDTH)}px`;
      slipp.style.height = `${random(MIN_HEIGHT, MAX_HEIGHT)}px`;
      slipp.style.left = `${random(0, RIGHT_BORDER-slipp.style.width.match(/\d*/)[0])}px`;
      slipp.style.top = `${random(0, RIGHT_BORDER-slipp.style.height.match(/\d*/)[0])}px`;
      slipp.style.backgroundPosition = `-${slipp.style.left} -${slipp.style.top}`;
      slipp.style.transform = `scale(${random(7, 15)/10})`;
    }
  });
}

function domContentLoaded() {
  slippers = document.querySelector('.slippers');
  slipper = document.querySelector('.slipper');
  RIGHT_BORDER = slippers.getBoundingClientRect().width;
  BOTTOM_BORDER = slippers.getBoundingClientRect().height;
  createSlippers();
  // applyCrazyness();
  window.addEventListener('mousemove', e => {
    applyCrazyness();
  });
}

document.addEventListener('DOMContentLoaded', domContentLoaded);
