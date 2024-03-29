import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";
import { IPanel } from "../../types/cv";

export const AboutSectionAlignmentStyles = styled.section`
  width: 100%;
  height: 780px;
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    height: 870px;
  }

  @media only screen and (max-width: 1000px) {
    height: 1200px;
  }

  @media only screen and (max-width: 590px) {
    height: 1200px;
  }

  @media only screen and (max-width: 510px) {
    height: 1200px;
  }

  @media only screen and (max-width: 430px) {
    height: 1300px;
  }

  @media only screen and (max-width: 330px) {
    height: 1450px;
  }
`;

export const AboutSectionHeadingTypographyStyles = styled.div`
  &:hover {
    animation: rubberBand 1s ease-in;

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
  }

  & b {
    cursor: pointer;
    padding-left: 15px;
    font-size: 75px;
  }

  @media only screen and (max-width: 760px) {
    & #about-section-scroll span div {
      font-size: 11.87vw !important;
      margin-top: 40px;
    }

    & b {
      font-size: 70px;
    }
  }

  @media only screen and (max-width: 590px) {
    & #about-section-scroll span div {
      font-size: 13.99vw !important;
      margin-top: 35px;
    }

    & b {
      font-size: 60px;
    }
  }

  @media only screen and (max-width: 400px) {
    & #about-section-scroll span div {
      font-size: 12vw !important;
      margin-top: 35px;
      margin-bottom: 15px;
    }

    & b {
      font-size: 45px;
    }
  }

  @media only screen and (max-width: 290px) {
    & #about-section-scroll span div {
      font-size: 12vw !important;
      margin-top: 35px;
      margin-bottom: 15px;
    }

    & b {
      display: none;
    }
  }
`;

export const AboutSectionContentContainerStyles = styled.div`
  width: 80%;
  margin-bottom: 60px;

  @media only screen and (max-width: 1350px) {
    width: 90%;
  }
`;

export const AboutSectionContentContentStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutSectionContentImgStyles = styled.div<IPanel>`
  position: relative;
  z-index: 1;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    background: #ff517e00;
    top: 25px;
    left: -25px;
    height: 98%;
    width: 90%;
    border: 4px solid
      ${(props) => (props.panel === false ? "#ff517e" : "#00c8da")};
    z-index: -1;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 590px) {
    margin-left: 20px;
    height: 88% !important;
    width: 95% !important;
  }

@media only screen and (max-width: 300px) {
  margin-left: 16px;
  height: 88% !important;
  width: 90% !important;

  &:after {
    left: -15px;
    top: 15px;
  }
}
`;

export const AboutSectionContentImgWrapperStyles = styled.div`
  & img {
    width: 90%;
    height: 480px;
    position: relative;
    box-shadow: 0px 0px 10px 2px rgba(1, 1, 1, 0.2);
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 10px 7px rgba(1, 1, 1, 0.2);
      transform: scale(1.02);
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 70vw !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    width: 85vw !important;
  }

  @media only screen and (max-width: 300px) {
    & img {
      width: 85vw !important;
      height: 400px !important;
    }
  }
`;

export const AboutSectionContentImgInfoStyles = styled.div<IPanel>`
  position: absolute;
  bottom: 0;
  transform: translateX(-5px);
  background: ${(props) => (props.panel === false ? "#00c8da" : "#ff517e")};
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 18px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s ease-in;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateX(-5px) scale(1.05);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateX(-5px) scale(0.99);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 590px) {
    width: 50px !important;
    height: 50px !important;
    line-height: 40px !important;
  }

@media only screen and (max-width: 500px) {
  transform: translateX(0px);
  width: 65px !important;
  height: 65px !important;
  line-height: 0px !important;
}
`;

export const AboutSectionContentImgInfoIconStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    width: 100%;
    height: 60px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 20;
  }

  @media only screen and (max-width: 500px) {
    & button {
      height: 65px;
    }
  }
`;

export const AboutSectionContentImgInfoIcon1Styles = styled(
  FontAwesomeIcon
)<IPanel>`
  position: relative;
  font-size: 30px !important;
  color: #fff;
  -webkit-transition: all 05s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  font-weight: 900;
  z-index: 10;
  display: ${(props) => (props.panel === false ? "" : "none")};
  visibility: ${(props) => (props.panel === false ? "visible" : "hidden")};
  opacity: ${(props) => (props.panel === false ? 1 : 0)};
`;

export const AboutSectionContentImgInfoIcon2Styles = styled(
  FontAwesomeIcon
)<IPanel>`
  display: ${(props) => (props.panel === false ? "none" : "")};
  visibility: ${(props) => (props.panel === false ? "hidden" : "visible")};
  opacity: ${(props) => (props.panel === false ? 0 : 1)};
  position: relative;
  -webkit-transition: all 05s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  font-weight: 900;
  z-index: 10;
  font-size: 30px !important;
  color: #fff;
`;

export const AboutSectionContentDetailsStyles = styled.div<IPanel>`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 90%;
  height: 480px;
  background: #101010d9;
  padding: 25px 50px;
  -webkit-transition: all 05s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  display: ${(props) => (props.panel === false ? "none" : "")};
  visibility: ${(props) => (props.panel === false ? "hidden" : "visible")};
  opacity: ${(props) => (props.panel === false ? 0 : 1)};

  @media only screen and (max-width: 1000px) {
    left: 3.5212vw !important;
  }

  @media only screen and (max-width: 720px) {
    padding: 10px 25px;
  }

  @media only screen and (max-width: 600px) {
    left: 20px !important;
    padding: 10px 15px;
  }

  @media only screen and (max-width: 590px) {
    width: 89%;
    left: 4.166vw !important;
    padding: 10px 30px;
    padding-top: 50px;
  }

  @media only screen and (max-width: 555px) {
    width: 88.5% !important;
  }

  @media only screen and (max-width: 500px) {
    width: 90% !important;
  }

  @media only screen and (max-width: 300px) {
    left: 0 !important;
    width: 100% !important;
    height: 400px !important;
  }
`;

export const AboutSectionContentDetailsPersonalStyles = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    margin-top: 8px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 33px;
    color: #74da20;
  }

  & h6 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 15px;
    color: #868686;
    margin-bottom: 20px;
  }

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & span h2 {
    margin-top: 8px;
    font-family: "Times New Roman", Times, serif;
    font-size: 25px;
    color: goldenrod;
    width: 35%;
  }

  & span p {
    color: white;
  }

  @media only screen and (max-width: 590px) {
    & span h2 {
      font-size: 18px !important;
    }

    & span p {
      font-size: 12.5px !important;
    }
  }

  @media only screen and (max-width: 400px) {
    & span h2 {
      font-size: 14px !important;
    }

    & span p {
      font-size: 10px !important;
    }
  }

  @media only screen and (max-width: 300px) {
    margin-top: 30px;
    & h1 {
      font-size: 23px;
    }

    & h6 {
      font-size: 10px;
      margin-bottom: 20px;
    }

    & span h2 {
      font-size: 10px !important;
    }

    & span p {
      font-size: 8px !important;
    }
  }
`;

export const AboutSectionContentIconsLinkStyles = styled.a`
  text-decoration: none;
  color: #706f6f;

  &:hover {
    color: #fff;
  }
`;

export const AboutSectionContentIconsTextStyles = styled.span`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #706f6f;

  & > ${AboutSectionContentIconsLinkStyles} * {
    cursor: pointer;
    font-size: 40px !important;
  }

  & > ${AboutSectionContentIconsLinkStyles} *:hover {
    color: #fff;
  }

  @media only screen and (max-width: 400px) {
    & > ${AboutSectionContentIconsLinkStyles} * {
      margin-left: 0.5vw;
      margin-right: 0.5vw;
      font-size: 10vw !important;
    }
  }
`;

export const AboutSectionContentContactTextStyles = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  word-wrap: break-word !important;

  & h2 {
    color: #0ae666;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 20px;

    @media only screen and (max-width: 1200px) {
      font-size: 18px !important;
    }

    @media only screen and (max-width: 1000px) {
      margin-top: 45px;
    }
  }

  & li {
    list-style: none;
    margin: 7px 0px;

    @media only screen and (max-width: 1200px) {
      font-size: 15px !important;
    }
  }

  & li:nth-child(1) {
    &::before {
      content: "🚀 ";
    }
  }

  & li:nth-child(3) {
    &::before {
      content: "👨‍🎓 ";
    }
  }

  & li:nth-child(5) {
    &::before {
      content: "🔭 ";
    }
  }

  & li:nth-child(7) {
    &::before {
      content: "🔥 ";
    }
  }

  & li:nth-child(9) {
    &::before {
      content: "📧 ";
    }
  }

  & li:nth-child(11) {
    &::before {
      content: "⚡ ";
    }
  }
`;

export const AboutSectionContentContactTextNameStyles = styled.h3`
  color: #0a6cff;
  margin-block: 0em;
  margin-top: 15px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;

  @media only screen and (max-width: 1200px) {
    font-size: 20px !important;
  }
`;

export const AboutSectionContentContactTextTextStyles = styled.p`
  color: #858585;
  margin-block: 0em;
  margin-top: 2px !important;
  font-size: 18px;
  font-family: serif;

  @media only screen and (max-width: 1200px) {
    font-size: 16px !important;
  }
`;

export const AboutSectionContentContactTextBtnGroupStyles = styled.div`
  margin-top: 20px;

  @media only screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutSectionContentContactTextBtn1Styles = styled(CustomButton)`
  font-size: 20px !important;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    box-shadow: 0px 1px 20px 5px rgba(0, 195, 255, 0.3) !important;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.5vw !important;
    min-width: 160px !important;
    height: 50px !important;
    margin-right: 16px;

    & > * {
      transform: translateY(-8px) !important;
    }

    & .cv-custom-button-icon-access > * {
      width: 2.2vw !important;
      height: 2.2vw !important;
    }

    &:hover > .custom-txt2-access {
      top: -3% !important;
      transform: translateY(-8px) !important;
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }
  }

  @media only screen and (max-width: 800px) {
    font-size: 2vw !important;
    min-width: 160px !important;
    height: 50px !important;

    & .cv-custom-button-icon-access > * {
      width: 2.8vw !important;
      height: 2.8vw !important;
      transform: translateY(-4px);
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }
  }

  @media only screen and (max-width: 390px) {
    margin: 0;
    width: 80%;
    font-size: 5vw !important;

    & .cv-custom-button-icon-access > * {
      width: 5vw !important;
      height: 5vw !important;
      transform: translateY(-4px);
    }
  }

  @media only screen and (max-width: 300px) {
    font-size: 5vw !important;

    & .cv-custom-button-icon-access > * {
      width: 6vw !important;
      height: 6vw !important;
      transform: translateY(-5px);
    }
  }
`;

export const AboutSectionContentContactTextBtn2Styles = styled(CustomButton)`
  background: rgb(0, 195, 255) !important;
  font-size: 20px !important;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    background: rgb(255, 174, 0) !important;
    box-shadow: 0px 1px 20px 5px rgba(0, 195, 255, 0.3) !important;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1.5vw !important;
    min-width: 160px !important;
    height: 50px !important;
    margin-right: 0px;

    & > * {
      transform: translateY(-8px) !important;
    }

    & .cv-custom-button-icon-access > * {
      width: 2.2vw !important;
      height: 2.2vw !important;
    }

    &:hover > .custom-txt2-access {
      top: -3% !important;
      transform: translateY(-8px) !important;
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }
  }

  @media only screen and (max-width: 800px) {
    font-size: 2vw !important;
    min-width: 160px !important;
    height: 50px !important;

    & .cv-custom-button-icon-access > * {
      width: 2.8vw !important;
      height: 2.8vw !important;
      transform: translateY(-4px);
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }
  }

  @media only screen and (max-width: 390px) {
    margin: 0;
    margin-top: 10px;
    width: 80%;
    font-size: 5vw !important;

    & .cv-custom-button-icon-access > * {
      width: 5vw !important;
      height: 5vw !important;
      transform: translateY(-4px);
    }
  }

  @media only screen and (max-width: 300px) {
    font-size: 5vw !important;

    & .cv-custom-button-icon-access > * {
      width: 6vw !important;
      height: 6vw !important;
      transform: translateY(-7px);
    }
  }
`;
