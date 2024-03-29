import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@material-ui/core";
import styled, { css } from "styled-components";

const fontIconCss = `
    font-size: 70px;
    cursor: pointer;
    color: grey;
    margin: 0px 20px;

    @media only screen and (max-width: 1235px) {
      font-size: 55px;
    }

    @media only screen and (max-width: 500px) {
      font-size: 35px;
      margin: 0px 3px;
    }
`;

const fontIconCssHover = `
    transform: scale(1.05);
`;

export const PortfolioSkillsBackgroundStyles = styled.section`
  background-color: rgb(255, 255, 255);
`;

export const PortfolioSkillsAlignmentStyles = styled.div`
  padding: 0px 0px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PortfolioSkillsTypoStyles = styled.div`
  padding: 15px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  & b {
    font-size: 75px;
    padding-left: 20px;
    transform: translateY(-10px);
    cursor: pointer;
  }

  &:hover,
  &:hover b {
    animation: rubberBand 1s ease-in;
  }

  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  @media only screen and (max-width: 850px) {
    margin-bottom: 10px;
    & * {
      font-size: 11.2vw !important;
    }

    & b {
      font-size: 25px;
      padding-left: 10px;
    }
  }

  @media only screen and (max-width: 650px) {
    & * {
      font-size: 11vw !important;
    }

    & b {
      font-size: 22px;
      padding-left: 5px;
    }
  }

  @media only screen and (max-width: 590px) {
    margin-bottom: 0px;
    & * {
      font-size: 12.5vw !important;
    }

    & b {
      font-size: 26px;
    }
  }

  @media only screen and (max-width: 380px) {
    & * {
      font-size: 12vw !important;
    }

    & b {
      display: none;
    }
  }
`;

export const PortfolioSkillsContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  word-wrap: wrap;
  width: 80%;
  margin-bottom: 20px;
  margin-top: 25px;

  @media only screen and (max-width: 1425px) {
    width: 85%;
  }

  @media only screen and (max-width: 1235px) {
    margin-top: 5px;
    width: 90%;
  }

  @media only screen and (max-width: 1150px) {
    width: 95%;
  }

  @media only screen and (max-width: 400px) {
  margin-top: 10px !important;
  }
`;

export const PortfolioSkillsContainerAlignmentStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PortfolioSkillIconHtmlStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: orange;
  }
`;
export const PortfolioSkillIconCssStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: rgb(0, 119, 255);
  }
`;
export const PortfolioSkillIconSassStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: pink;
  }
`;
export const PortfolioSkillIconBootstrapStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: purple;
  }
`;
export const PortfolioSkillIconJsStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: yellow;
  }
`;
export const PortfolioSkillIconTsStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 20px;

  &:hover {
    fill: blue !important;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconReactStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: aqua;
  }
`;
export const PortfolioSkillIconReduxStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 20px;

  &:hover {
    fill: purple !important;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconGatsbyStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 15px 0px 17px;

  &:hover {
    fill: purple !important;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;

export const PortfolioSkillIconGraphqlStyles = styled(Icon)<any>`
  width: 75px !important;
  height: 75px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 15px 0px 17px;

  &:hover {
    fill: palevioletred !important;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconNodeStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: greenyellow;
  }
`;
export const PortfolioSkillIconDockerStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: lightskyblue;
  }
`;
export const PortfolioSkillIconKubeStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 10px 0 10px;

  &:hover {
    fill: blue !important;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconGitStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: orangered;
  }
`;
export const PortfolioSkillIconAspStyles = styled(Icon)<any>`
  width: 90px !important;
  height: 90px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 11px 0 11px;
  transform: translateY(5px);

  &:hover {
    fill: blue !important;
    transform: translateY(5px) scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconCLangStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 15px 0px 17px;
  transform: translateY(5px);

  &:hover {
    fill: rgb(46, 95, 255) !important;
    transform: translateY(5px) scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconCppStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 15px;
  transform: translateY(5px);

  &:hover {
    fill: rgb(46, 95, 255) !important;
    transform: translateY(5px) scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconCsStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 15px 0px 17px;
  transform: translateY(5px);

  &:hover {
    fill: purple !important;
    transform: translateY(5px) scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconLinuxStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 15px 0px 17px;
  transform: translateY(5px);

  &:hover {
    fill: yellow !important;
    transform: translateY(5px) scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconPostgreStyles = styled(Icon)<any>`
  width: 70px !important;
  height: 70px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 15px 0px 17px;
  transform: translateY(5px);

  &:hover {
    fill: blue !important;
    transform: translateY(5px) scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconMsSqlStyles = styled(Icon)<any>`
  width: 90px !important;
  height: 90px !important;
  cursor: pointer;
  fill: grey !important;
  margin: 0px 13px 0 17px;

  &:hover {
    fill: red !important;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1235px) {
    width: 60px !important;
  }

  @media only screen and (max-width: 500px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0px 3px;
  }
`;
export const PortfolioSkillIconJavaStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: cadetblue;
  }
`;
export const PortfolioSkillIconPythonStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: royalblue;
  }
`;
export const PortfolioSkillIconRustStyles = styled(FontAwesomeIcon)`
  ${css`
    ${fontIconCss}
  `};
  &:hover {
    ${css`
      ${fontIconCssHover}
    `};
    color: rgb(41, 34, 34);
  }
`;
