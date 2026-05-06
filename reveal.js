let typeSplit;
function runSplit() {
  typeSplit = new SplitType(".transition-text", {
    types: "lines, words",
  });
  createAnimation();
}
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
      clipPath: "inset(0 0% 0 0)",
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
