import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999;
  height: 100%;
  width: 100%;
  background-color: white;
  display: ${({ loading }) => (loading ? "block" : "none")};
  .loader-4 {
    width: 80px;
    height: 80px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > span {
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      margin: 5px;
    }

    & > span:nth-child(1) {
      background-color: #296dcf;
      animation: loader-4_1 6s linear infinite, loader-4-radius 3s infinite,
        loader-4-scale 1.5s infinite;
    }

    & > span:nth-child(2) {
      left: 50%;
      background-color: #569bfc;
      animation: loader-4_2 6s linear infinite, loader-4-radius 3s infinite,
        loader-4-scale 1.5s infinite;
    }

    & > span:nth-child(3) {
      top: 50%;
      background-color: #296dcf;
      animation: loader-4_3 6s linear infinite, loader-4-radius 3s infinite,
        loader-4-scale 1.5s infinite;
    }

    & > span:nth-child(4) {
      top: 50%;
      left: 50%;
      background-color: #569bfc;
      animation: loader-4_4 6s linear infinite, loader-4-radius 3s infinite,
        loader-4-scale 1.5s infinite;
    }
  }

  @keyframes loader-4_1 {
    0% {
      left: 0;
      top: 0;
    }

    10% {
      left: 0;
      top: 0;
    }

    25% {
      left: 50%;
      top: 0;
    }

    35% {
      left: 50%;
      top: 0;
    }

    50% {
      left: 50%;
      top: 50%;
    }

    60% {
      left: 50%;
      top: 50%;
    }

    75% {
      left: 0;
      top: 50%;
    }

    85% {
      left: 0;
      top: 50%;
    }

    100% {
      left: 0;
      top: 0;
    }
  }

  @keyframes loader-4_2 {
    0% {
      left: 50%;
      top: 0;
    }

    10% {
      left: 50%;
      top: 0;
    }

    25% {
      left: 50%;
      top: 50%;
    }

    35% {
      left: 50%;
      top: 50%;
    }

    50% {
      left: 0;
      top: 50%;
    }

    60% {
      left: 0;
      top: 50%;
    }

    75% {
      left: 0;
      top: 0;
    }

    85% {
      left: 0;
      top: 0;
    }

    100% {
      left: 50%;
      top: 0;
    }
  }

  @keyframes loader-4_3 {
    0% {
      left: 50%;
      top: 50%;
    }

    10% {
      left: 50%;
      top: 50%;
    }

    25% {
      left: 0;
      top: 50%;
    }

    35% {
      left: 0;
      top: 50%;
    }

    50% {
      left: 0;
      top: 0;
    }

    60% {
      left: 0;
      top: 0;
    }

    75% {
      left: 50%;
      top: 0;
    }

    85% {
      left: 50%;
      top: 0;
    }

    100% {
      left: 50%;
      top: 50%;
    }
  }

  @keyframes loader-4_4 {
    0% {
      left: 0;
      top: 50%;
    }

    10% {
      left: 0;
      top: 50%;
    }

    25% {
      left: 0;
      top: 0;
    }

    35% {
      left: 0;
      top: 0;
    }

    50% {
      left: 50%;
      top: 0;
    }

    60% {
      left: 50%;
      top: 0;
    }

    75% {
      left: 50%;
      top: 50%;
    }

    85% {
      left: 50%;
      top: 50%;
    }

    100% {
      left: 0;
      top: 50%;
    }
  }

  @keyframes loader-4-radius {
    50% {
      border-radius: 50%;
    }
  }

  @keyframes loader-4-scale {
    50% {
      transform: scale(0.1);
    }
  }
`;

const Loader = props => {
  return (
    <Wrapper loading={props.loading ? 1 : 0} className={"loader"}>
      <div className="loader-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Wrapper>
  );
};

export default Loader;
