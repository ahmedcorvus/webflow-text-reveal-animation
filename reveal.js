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
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
    tl.from($(this), {
      "--line-width": "0%",
      duration: 1,
    });
  });
}
runSplit();
