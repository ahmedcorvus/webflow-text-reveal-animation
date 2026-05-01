let typeSplit;

function runSplit() {
  // Split the text into lines
  typeSplit = new SplitType(".transition-text", {
    types: "lines",
  });

  createAnimation();
}

// Update on resize
let windowWidth = window.innerWidth;
window.addEventListener("resize", function () {
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;
    typeSplit.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  $(".line").each(function () {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 85%", 
        end: "top 50%",  
        scrub: 1,
      },
    });

    tl.fromTo(
      $(this),
      { "--line-width": "0%" },
      { "--line-width": "100%", ease: "none" }
    );
  });
}

runSplit();
