let typeSplit;

function runSplit() {
  // Split the text into lines to preserve your span colors perfectly
  typeSplit = new SplitType(".transition-text", {
    types: "lines",
  });

  createAnimation();
}

// Ensure responsiveness on resize
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
      opacity: 1, // Fade to 100%
      scrollTrigger: {
        trigger: $(this),
        start: "top 80%", // Starts when the line enters the view
        end: "top 50%",   // Full opacity by the middle of the screen
        scrub: true,
      },
    });
  });
}

runSplit();
