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
`;

export const AboutSectionContentContainerStyles = styled.div`
  width: 80%;
  margin-bottom: 60px;
`;

export const AboutSectionContentContentStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutSectionContentImgStyles = styled.div<IPanel>`
  position: relative;
  z-index: 1;
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
`;

export const AboutSectionContentImgWrapperStyles = styled.div`
  & img {
    width: 90%;
    height: 480px;
    position: relative;
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
  padding: 50px 50px;
  -webkit-transition: all 05s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  display: ${(props) => (props.panel === false ? "none" : "")};
  visibility: ${(props) => (props.panel === false ? "hidden" : "visible")};
  opacity: ${(props) => (props.panel === false ? 0 : 1)};
`;

export const AboutSectionContentDetailsPersonalStyles = styled.div``;

export const AboutSectionContentContactTextStyles = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;

  & h2 {
    color: #0ae666;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 30px;
  }

  & p {
    text-align: justify;
    margin-top: 10px;
  }
`;

export const AboutSectionContentContactTextNameStyles = styled.h3`
  color: #0a6cff;
  margin-block: 0em;
  margin-top: 20px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const AboutSectionContentContactTextTextStyles = styled.p`
  color: #858585;
  margin-block: 0em;
  margin-top: 2px !important;
  font-size: 18px;
  font-family: serif;
`;

export const AboutSectionContentContactTextBtnGroupStyles = styled.div`
  margin-top: 30px;
`;

export const AboutSectionContentContactTextBtn1Styles = styled(CustomButton)`
  font-size: 20px !important;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    box-shadow: 0px 1px 20px 5px rgba(0, 195, 255, 0.3) !important;
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
`;
