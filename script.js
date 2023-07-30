var tl = gsap.timeline()
tl.from("#page1 svg",{
    y:-40,
    opacity:0,
    delay:0.3,
    duration:0.7
})
.from("#page1 img",{
    scale:0.5,
    borderRadius:"10px",
    duration:1,
    ease: Power4.easeOut
})
.from("#nav",{
    y:-50,
    opacity:0,
    duration:0.6
})