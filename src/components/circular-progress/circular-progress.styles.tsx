import styled from "styled-components";
import { ICircularProgressStyles, ICircularTextStyles } from "../../types/cv";

export const CircularProgressComponentContainerStyles = styled.section`
  /* padding: 10px; */
`;

export const CircularProgressComponentPercentStyles = styled.div<ICircularProgressStyles>`
  transition: all 0.3s linear;
  box-sizing: border-box;
  margin: 0 !important;
  width: 150px;
  cursor: pointer;

  & svg {
    position: relative;
    width: 150px;
    height: 150px;
    z-index: 30;
  }

  & svg circle {
    width: 150px;
    height: 100%;
    fill: none;
    stroke: #929292;
    stroke-width: 3;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }

  & svg circle:nth-child(2) {
    stroke-width: 10;
    stroke-dasharray: 440;
    stroke-dashoffset: calc(440 - (440 * ${(props) => props.percent}) / 100);
    stroke: ${(props) => props.color};
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(70%);
  }
`;

export const CircularProgressComponentNumberStyles = styled.span<ICircularTextStyles>`
  position: absolute;
  margin-block: 0;
  margin: 0;
  padding: 0;
  transform: translate(-100px, 50px);
  text-align: center;

  & h2 {
    color: ${(props) => props.color};
  }
`;
