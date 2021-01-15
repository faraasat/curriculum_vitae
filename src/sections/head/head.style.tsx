import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";
import Bg from "../../assets/bg-2.svg";

export const HeadSectionAlignmentStyles = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 800px;
  justify-content: center;
  /* background: linear-gradient(
    150deg,
    rgba(163, 255, 110, 0.5),
    rgba(240, 255, 110, 0.5),
    rgba(255, 216, 110, 0.5),
    rgba(255, 163, 110, 0.5),
    rgba(183, 248, 219, 0.5),
    rgba(80, 167, 194, 0.5),
    rgba(0, 174, 255, 0.5),
    rgba(241, 132, 255, 0.5),
    rgba(255, 112, 231, 0.5),
    rgba(255, 158, 187, 0.5),
    rgba(158, 255, 223, 0.5),
    rgba(158, 255, 171, 0.5)
  ) !important; */
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  z-index: -10;
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media only screen and (max-width: 1295px) {
    height: 600px;
  }

  @media only screen and (max-width: 1060px) {
    height: 450px;
  }

  @media only screen and (max-width: 770px) {
    height: 400px;
  }
`;

export const HeadSectionBackgroundTopStyles = styled.div`
  user-select: none;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -5;
`;

export const HeadSectionBackgroundImageStyles = styled.div`
  background-image: url(${Bg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100% !important;
  opacity: 0.5;
`;

export const HeadSectionContentAlignmentStyles = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeadSectionTypoStyles = styled.div`
  position: relative;
  width: 35vw;
  transform: translateX(4vw);
  z-index: 10;

  @media only screen and (max-width: 700px) {
    width: 100vw;
    transform: translateX(-4vw);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const HeadSectionTypoFirstStyles = styled.div`
  color: #00c020;
  font-size: 25px;
  font-weight: bolder;
  transform: translateX(25px);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    width: 243px;
    height: 40px;
    background: #ffc455;
    transform: translate(-25px, -2.5px);
    z-index: -1;
  }

  @media only screen and (max-width: 1295px) {
    font-size: 1.565vw;

    &:after {
      width: 150px;
      height: 40px;
      transform: translate(-25px, -8px);
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 4.01vw;

    &:after {
      width: 150px;
      height: 40px;
      transform: translate(-25px, -3.2px);
    }
  }
`;

export const HeadSectionTypoFirstSubStyles = styled.span`
  color: #ffffff !important;
  font-size: 26px;

  @media only screen and (max-width: 1295px) {
    font-size: 1.75vw;
  }

  @media only screen and (max-width: 700px) {
    font-size: 4.19vw;
  }
`;

export const HeadSectionTypoSecondStyles = styled.div`
  margin-top: 13px;
  font-family: "Polya", cursive;
  color: #00b7ff !important;
  font-size: 3.65vw;
  font-weight: 400;

  @media only screen and (max-width: 1295px) {
    font-size: 3.3vw;
  }

  @media only screen and (max-width: 700px) {
    font-size: 5.5vw;
  }
`;

export const HeadSectionTypoTypedStyles = styled.h1`
  border-left: 9px solid #129ddd;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 2px;
  font-size: 25px;
  padding-left: 15px;
  color: #ff00b3;

  @media only screen and (max-width: 1295px) {
    font-size: 1.7vw;
  }

  @media only screen and (max-width: 700px) {
    font-size: 3vw;
  }
`;

export const HeadSectionTypoBtnGroupStyles = styled.div`
  margin-top: 40px;

  @media only screen and (max-width: 1295px) {
    margin-top: 30px;

    display: flex;
  }
`;

export const HeadSectionTypoBtn1Styles = styled(CustomButton)`
  background: rgb(255, 174, 0) !important;
  font-size: 20px !important;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    background: rgb(0, 195, 255) !important;
    box-shadow: 0px 1px 20px 5px rgba(255, 174, 0, 0.3) !important;
  }

  @media only screen and (max-width: 1295px) {
    font-size: 1.6vw !important;
    min-width: 180px !important;
    height: 50px !important;
    margin-right: 10px;

    & > * {
      transform: translateY(-8px);
    }

    & .cv-custom-button-icon-access > * {
      width: 2.5vw !important;
      height: 2.5vw !important;
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }

    &:hover span:nth-child(2) {
      transform: translateY(-10%) !important;
    }
  }

  @media only screen and (max-width: 960px) {
    font-size: 1.4vw !important;
    min-width: 155px !important;
    height: 40px !important;
    margin-right: 10px;

    & > * {
      transform: translateY(-12px);
    }

    & .cv-custom-button-icon-access > * {
      width: 2vw !important;
      height: 2vw !important;
      transform: translateY(-4px);
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }

    &:hover span:nth-child(2) {
      transform: translateY(-20%) !important;
    }
  }

  @media only screen and (max-width: 770px) {
    font-size: 1.4vw !important;
    min-width: 130px !important;
    height: 35px !important;
    margin-right: 10px;

    & > * {
      transform: translateY(-15px);
    }

    &:hover span:nth-child(2) {
      transform: translateY(-25%) !important;
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 2.3vw !important;
    min-width: 180px !important;
    height: 43px !important;
    margin-right: 16px;
    margin-left: 30px;

    & > * {
      transform: translateY(-12px);
    }

    & .cv-custom-button-icon-access > * {
      width: 3vw !important;
      height: 3vw !important;
      transform: translateY(-4px);
    }

    &:hover span:nth-child(2) {
      transform: translateY(-18%) !important;
    }
  }
`;

export const HeadSectionTypoBtn2Styles = styled(CustomButton)`
  background: rgb(0, 195, 255) !important;
  font-size: 20px !important;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    background: rgb(255, 174, 0) !important;
    box-shadow: 0px 1px 20px 5px rgba(0, 195, 255, 0.3) !important;
  }

  @media only screen and (max-width: 1295px) {
    font-size: 1.6vw !important;
    min-width: 180px !important;
    height: 50px !important;
    margin-right: 0px;

    & > * {
      transform: translateY(-8px) !important;
    }

    & .cv-custom-button-icon-access > * {
      width: 2.5vw !important;
      height: 2.5vw !important;
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }
  }

  @media only screen and (max-width: 960px) {
    font-size: 1.4vw !important;
    min-width: 155px !important;
    height: 40px !important;
    margin-right: 10px;

    & > * {
      transform: translateY(-12px) !important;
    }

    & .cv-custom-button-icon-access > * {
      width: 2vw !important;
      height: 2vw !important;
      transform: translateY(-4px);
    }

    &:hover span:nth-child(1) {
      transform: translateY(-200%) !important;
      top: -10px !important;
    }

    &:hover span:nth-child(2) {
      transform: translateY(-20%) !important;
    }
  }

  @media only screen and (max-width: 770px) {
    font-size: 1.4vw !important;
    min-width: 130px !important;
    height: 35px !important;

    & > * {
      transform: translateY(-15px) !important;
    }

    &:hover span:nth-child(2) {
      transform: translateY(-25%) !important;
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 2.3vw !important;
    min-width: 180px !important;
    height: 43px !important;
    margin-right: 0px;
    margin-left: 0px;

    & > * {
      transform: translateY(-12px) !important;
    }

    & .cv-custom-button-icon-access > * {
      width: 3vw !important;
      height: 3vw !important;
      transform: translateY(-4px);
    }

    &:hover span:nth-child(2) {
      transform: translateY(-18%) !important;
    }
  }
`;

export const HeadSectionImgStyles = styled.div`
  position: relative;
  height: 700px;
  width: 56%;

  @media only screen and (max-width: 960px) {
    transform: translateX(5vw);
  }

  @media only screen and (max-width: 700px) {
    display: none !important;
  }
`;

export const HeadSectionImageImgStyles = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin-block: 0;
  width: 100% !important;
  height: 100%;
  animation: aboutImg 30s infinite linear;
  animation-fill-mode: none;

  @keyframes aboutImg {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    20% {
      transform: translateY(-30px);
      opacity: 0.7;
    }
    60% {
      transform: translateY(0px);
      opacity: 1;
    }
    80% {
      transform: translateY(30px);
      opacity: 0.7;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
