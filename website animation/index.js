// GSAP timeline
const gsapTimeline = gsap.timeline({ repeat: 0 });

// Entrance animation
gsapTimeline
  .fromTo(
    ".ml5 .line",
    { opacity: 0.5, scaleX: 0 },
    { opacity: 1, scaleX: 1, duration: 0.7, ease: "expo.inOut" }
  )
  .to(".ml5 .line", {
    duration: 0.6,
    ease: "expo.inOut",
    y: (index, target) => -0.625 + 0.625 * 2 * index + "em",
  })
  .fromTo(
    ".ml5 .ampersand",
    { opacity: 0, scaleY: 0.5 },
    { opacity: 1, scaleY: 1, duration: 0.6, ease: "expo.inOut" },
    "-=0.6"
  )
  .fromTo(
    ".ml5 .letters-left",
    { opacity: 0, x: "0.5em" },
    { opacity: 1, x: 0, duration: 0.6, ease: "expo.inOut" },
    "-=0.3"
  )
  .fromTo(
    ".ml5 .letters-right",
    { opacity: 0, x: "-0.5em" },
    { opacity: 1, x: 0, duration: 0.6, ease: "expo.inOut" },
    "-=0.6"
  )
  .to(".ml5", {
    opacity: 0,
    duration: 1,
    ease: "expo.inOut",
    delay: 1,
  })


  .to("#fs", {
    height: 0,
    duration: 2,
    ease: "expo.inOut",
  })
  .to("#elem", {
    height: "100%",
    duration: 2,
    ease: "expo.inOut",
  }, "-=2")
  .to("#white", {
    height: "100%",
    duration: 2,
    ease: "expo.inOut",
  }, "-=1.7");
