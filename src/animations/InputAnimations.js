import { TweenMax } from "gsap/TweenMax";

export const closeInput = _ => {
  const divSearch = document.querySelector("div.search");
  const buttonUser = document.querySelector("button.user");
  const inputSearch = document.querySelector("input.search");
  divSearch.classList.toggle("active");

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
  new TweenMax(buttonUser, 0.15, {
    css: { transform: "translateX(0)" },
    delay: 0.15
  });
};
