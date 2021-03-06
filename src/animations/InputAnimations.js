import { TweenMax } from "gsap/TweenMax";

export const closeInput = _ => {
  const divSearch = document.querySelector("div.search");
  const nav = document.querySelector("nav");
  const inputSearch = document.querySelector("input.search");
  nav.classList.remove("active");

  new TweenMax(inputSearch, 0.15, {
    css: { transform: "translateY(100%)" }
  });
  new TweenMax(
    divSearch,
    0.15,
    {
      css: { transform: "translateX(0)" },
      delay: 0.15
    },
    "+=0.15"
  );
};

export const openInput = _ => {
  const divSearch = document.querySelector("div.search");

  const inputSearch = document.querySelector("input.search");
  new TweenMax(divSearch, 0.15, {
    css: { transform: "translateX(-214px)" }
  });

  new TweenMax(inputSearch, 0.15, {
    css: { transform: "translateY(-50%)" },
    delay: 0.15
  });
};
