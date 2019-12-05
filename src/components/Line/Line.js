import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-43%, -47.8%);
  @media only screen and (min-width: 1024px) {
    display: block;
  }
  svg {
    height: 100%;
    width: 100%;
    overflow: visible;
    .path {
      stroke-dasharray: ${({ pathLength }) => (pathLength ? pathLength : null)};
      will-change: stroke-dashoffset;
    }
  }
`;

const Line = () => {
  const [pathLength, setPathLength] = useState(1993);
  const [stroke, setStroke] = useState(pathLength);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const path = document.querySelector(".path");
    const pathLength = path.getTotalLength();
    setPathLength(pathLength);

    const handleScroll = () => {
      if (window.innerWidth >= 1024 && window.innerWidth < 1399) {
        setStroke(pathLength - (window.scrollY - 165));
      } else if (window.innerWidth > 1400) {
        setStroke(pathLength - window.scrollY * 0.8);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Wrapper pathLength={pathLength}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.42 1024">
        <title>line</title>
        <g id="e6f1a36e-8168-4089-8278-e6b3c55f26a7" data-name="Warstwa 2">
          <g id="e66948b2-0c13-4fb6-9015-03c33e7b15cf" data-name="Warstwa 1">
            <path
              className="path"
              stroke="#000000"
              strokeWidth="1"
              strokeMiterlimit="1"
              fill="#FFFFFF"
              strokeDashoffset={stroke}
              d="M0,32.12s61-44,89-29,85,61,75,81,22.5,76.5-6.5,88.5S37,159.12,27,200.12s-.5,151.5,36.5,168.5,60,22,65,60c2,15.3,46.23-5,58,17,17.47,32.6,2.14,26.67-11,44-22,29-46,22-55,8s7-27,26-21,30.5-6.5,30.5,9.5-7,51-20,51c-6.81,0-55.28-7.54-87.5,3.5-29.3,10-44.17,38-21,51,34,19,146,111,54,142C47.24,752.24,65,795.12,61,843.12S216.19,942,177.5,954.62c-101,33-107.5,115.5-93.5,134.5s79,40,95,33"
            />
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default Line;
