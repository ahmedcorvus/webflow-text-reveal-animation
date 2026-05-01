let typeSplit;

function runSplit() {
  // Target your specific class
  // We split by lines to get that smooth sentence-by-sentence reveal
  typeSplit = new SplitType(".transition-text", {
    types: "lines",
  });

  createAnimation();
}

// Re-run on window resize to ensure line breaks are recalculated
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
  $(".line").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 85%", // Animation starts when line is near bottom
        end: "top 50%",   // Animation ends when line reaches middle
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

// Initial run
runSplit();
