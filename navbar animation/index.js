var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.8,
});

tl.from("#full h4", {
  opacity: 0,
  x: 150,
  duration: 0.6,
  stagger: 0.25,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click",function(){
    tl.play();
})
close.addEventListener("click",function(){
    tl.reverse();
})