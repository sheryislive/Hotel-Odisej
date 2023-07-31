var tl = gsap.timeline();
tl.from("#page1 svg", {
  y: -40,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
})
  .from("#page1 img", {
    scale: 0.5,
    borderRadius: "10px",
    duration: 1,
    ease: Power4.easeOut,
  })
  .from("#nav", {
    y: -50,
    opacity: 0,
    duration: 0.6,
  });

var h2Text = document.querySelectorAll("#page2 h2");
h2Text.forEach(function (elem) {
  var storedText = elem.textContent;

  var splitedText = storedText.split("");
  var clutter = "";
  splitedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  elem.innerHTML = clutter;
});

gsap.to("#page2 h2 span", {
  color: "#E3E3C4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    scroller: "body",
    start: "top 55%",
    end: "top -5%",
    markers: true,
    scrub: 1,
  },
});
