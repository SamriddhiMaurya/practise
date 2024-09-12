// let rect = window.querySelector("#rect");
window.addEventListener("mousemove", function (details) {
  gsap.to("#rect", {
    x: details.clientX +'px',
    ease: Power3.easeOut,
  });
});
