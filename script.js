AOS.init();

function scrollSmoothTo(elementId) {
  let element = document.getElementById(elementId);
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

let animation = anime.timeline({});

animation.add({
  targets: "#solar",
  top: "100px",
  duration: 500,
  easing: "easeInOutSine",
});
