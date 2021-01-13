import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@material-ui/core";
import styled, { css } from "styled-components";

const fontIconCss = `
    font-size: 70px;
    cursor: pointer;
    color: grey;
    margin: 0px 20px;
`;

const fontIconCssHover = `
    transform: scale(1.05);
`;

export const PortfolioSkillsBackgroundStyles = styled.section`
  background-color: rgb(255, 255, 255);
`;

export const PortfolioSkillsAlignmentStyles = styled.div`
  padding: 10px 0px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PortfolioSkillsContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  word-wrap: wrap;
  width: 80%;
  margin-bottom: 20px;
  margin-top: 25px;
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
