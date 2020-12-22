// INTRO ANIMATE IN

const tl = gsap.timeline({defaults: {ease: 'power1.out' }});


tl.fromTo('nav', {opacity: 0}, { opacity: 1, duration: 1}, "+=.5");
tl.fromTo('.hero-message', {opacity: 0}, { opacity: 1, duration: 1}, "-=.75");
tl.fromTo('.hero-message2', {opacity: 0}, { opacity: 1, duration: 1},"-=.75");

