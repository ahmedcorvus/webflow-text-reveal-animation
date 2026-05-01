let typeSplit;

function runSplit() {
  // Adding 'words' prevents SplitType from deleting your nested spans
  typeSplit = new SplitType(".transition-text", {
    types: "lines, words", 
  });

  createAnimation();
}

// Re-run split on window resize for responsiveness
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
  // We still animate the lines, but the spans inside are now safe
  $(".line").each(function () {
    gsap.to($(this), {
      opacity: 1, 
      scrollTrigger: {
        trigger: $(this),
        start: "top 80%", 
        end: "top 50%",   
        scrub: true,
      },
    });
  });
}

runSplit();
