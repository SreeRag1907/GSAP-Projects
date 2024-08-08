function breakText() {
  const h1Element = document.querySelector("h1");
  const textContent = h1Element.textContent;
  const splitText = textContent.split("");

  var halfValue = splitText.length / 2;

  var clutter = "";

  splitText.forEach(function (e, i) {
    if (i < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });

  h1Element.innerHTML = clutter;
}

breakText();

gsap.from("h1 .a", {
  opacity: 0,
  y: 70,
  duration: 0.6,
  delay: 0.6,
  stagger: 0.2,
});
gsap.from("h1 .b", {
  opacity: 0,
  y: 70,
  duration: 0.6,
  delay: 0.6,
  stagger: -0.2,
});
