// INTRO ANIMATE IN

const tl = gsap.timeline({defaults: {ease: 'power1.out' }});


tl.to('.text', {y:'0%', duration: 1, stagger:0.25})
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', {y: "-100%", duration: 1, delay: 0.5}, "-=2.2");
tl.fromTo('nav', {opacity: 0}, { opacity: 1, duration: 1}, "+=.5");
tl.fromTo('.hero-message', {opacity: 0}, { opacity: 1, duration: 1}, "-=.75");
tl.fromTo('.hero-message2', {opacity: 0}, { opacity: 1, duration: 1},"-=.75");

