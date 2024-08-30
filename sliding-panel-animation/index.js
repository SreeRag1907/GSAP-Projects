// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate the header
gsap.to("header h1", {
    duration: 1.5,
    opacity: 1,
    y: 0,
    ease: "power4.out",
});

gsap.to("header p", {
    duration: 1.5,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    delay: 0.3,
});

// Animate sections on scroll
gsap.utils.toArray(".section").forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
    });
});

// Animate footer
gsap.to("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out"
});
