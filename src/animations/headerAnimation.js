import { TimelineMax } from "gsap/all";

export const headerAnimation = () => {
  const casual = document.querySelector(".template--casual");
  const office = document.querySelector(".template--office");
  const motto = document.querySelector(".template--motto");
  const tlHeader = new TimelineMax({ play: false });
  tlHeader
    .set(office, { css: { transform: "translatex(100%)" } })
    .set(motto, { css: { transform: "translatex(100%)" } })
    .set(casual, { css: { transform: "translatex(0)" } })
    .to(casual, 1, { css: { transform: "translatex(-100%)" }, delay: 5 })
    .to(office, 1, { css: { transform: "translatex(0)" } });
};
