const loop = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function (callback) { setTimeout(callback, 1000 / 60); };

function init(fn) {
  let lastY;

  function positionChanged () {
    return lastY !== pageYOffset;
  };

  function update() {
    if (positionChanged()) {
      // only do updates when Y-Position changed!
      fn({ y: pageYOffset });
    }
    lastY = pageYOffset;

    loop(update);
  };

  return update;
};

export default function onScroll(fn) {
  const update = init(fn);
  update();
}
