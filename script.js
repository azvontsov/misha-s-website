AOS.init();

function scrollSmoothTo(elementId) {
  let element = document.getElementById(elementId);
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
