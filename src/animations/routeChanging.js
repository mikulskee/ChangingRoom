import { TimelineMax as Timeline, Power1 } from "gsap";

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const productWrapper = node.querySelector(".product-card-wrapper");
  timeline
    .from(node, 0.35, {
      autoAlpha: 0,
      ease: Power1.easeIn
    })
    .from(
      productWrapper,
      0.35,
      {
        autoAlpha: 0,
        y: 10,

        ease: Power1.easeOut
      },
      "-=0.35"
    );

  return timeline;
};

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const main = node.querySelector("main");
  const header = node.querySelector("header");
  const line = node.querySelector(".line");

  timeline
    .from(header, 0.35, { y: 10, opacity: 0, delay })
    .from(
      main,
      0.35,
      {
        autoAlpha: 0,
        y: 10,
        ease: Power1.easeOut
      },
      "-=0.25"
    )
    .from(line, 0.35, { opacity: 0, delay }, "-=0.25");
  return timeline;
};

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline;

  if (pathname === "/") timeline = getHomeTimeline(node, delay);
  else timeline = getDefaultTimeline(node, delay);

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = node => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
};
