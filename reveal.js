let typeSplit;

function runSplit() {
  // Split the text into lines
  typeSplit = new SplitType(".transition-text", {
    types: "lines",
  });

  createAnimation();
}

// Re-split on window resize for responsiveness
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
    gsap.to($(this), {
      opacity: 1, // Animate to 100%
      scrollTrigger: {
        trigger: $(this),
        start: "top 85%", // Starts fading in when line is near bottom
        end: "top 50%",   // Reaches full opacity by middle of screen
        scrub: true,      // Links animation progress to scroll
      },
    });
  });
}

runSplit();
