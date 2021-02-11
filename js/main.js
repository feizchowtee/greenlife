$('.hero-cta').click(function(){
    gsap.to(window, {
        duration: 2,
        scrollTo: "#request-quote"
    });
});

//Scroll Animations

gsap.to('p', {
    scrollTrigger: ".about", // start the animation when ".box" enters the viewport (once)
    y: 0
});