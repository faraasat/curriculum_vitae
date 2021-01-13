import styled, { css } from "styled-components";
import { IHoverScrollImage, IIconState } from "../../types/cv";

const Box = ` width: 330px;
              height: 345px;
              background: #000;
              background-position: top;
              transition: ease-in-out 8s;
              `;

const BoxHover = `background-position: bottom;`;

export const HoverScrollAlignmentStyles = styled.div`
  margin: 10px 25px;
`;

export const HoverScrollInfoStyles = styled.span<IIconState>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-20px, -15px);
  -webkit-transition: all 07s;
  -moz-transition: all 0.7s;
  -ms-transition: all 0.7s;
  -o-transition: all 0.7s;
  transition: all 0.7s;

  & > * {
    font-size: 60px !important;
    color: ${(props) => (props.iconState ? "pink" : "#00c3ff")};
  }
`;

export const HoverScrollBox1Styles = styled.div<IHoverScrollImage>`
  ${css`
    ${Box}
  `}
  background: url(${(props) => props.Img});
  background-size: cover !important;

  &:hover {
    ${css`
      ${BoxHover}
    `}
  }
`;

export const HoverScrollFooterStyles = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateY(10px);

  & p {
    color: #758da3;
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
  }
`;

export const HoverScrollBtnStyles = styled.a`
  text-decoration: none;
  padding: 8px 15px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bolder;
  padding-right: 17px;
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  text-align: center;
  text-transform: uppercase;
  background-size: 200% auto;
  transition: 0.5s;
  color: white;
  box-shadow: 0 0 20px #abb5b6;
  border-radius: 10px;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const HoverScrollScreenStyles = styled.div<IIconState>`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(16, 16, 16, 0.91);
  width: 330px;
  height: 345px;
  padding: 25px 50px;
  -webkit-transition: all 07s;
  -moz-transition: all 0.7s;
  -ms-transition: all 0.7s;
  -o-transition: all 0.7s;
  transition: all 0.7s;
  display: ${(props) => (props.iconState === false ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.iconState === false ? "hidden" : "visible")};
  opacity: ${(props) => (props.iconState === false ? 0 : 1)};

  & span {
    font-size: 55px;
    margin-bottom: 15px;
  }

  & p {
    font-size: 16px;
    text-align: justify;
    color: #f5bf0e;
  }
`;
