import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";

export const HeadSectionParticleAlignmentStyles = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 110vw;
  min-height: auto !important;
  z-index: -10;

  & > * {
    height: 920px;
  }
`;

export const HeadSectionBackgroundStyles = styled.section`
  position: absolute;
  top: 0;
  margin: 40px 0px 0px 40px;
  z-index: 1;
`;

export const HeadSectionBackgroundContainerStyles = styled.div`
  height: 830px;
  margin-bottom: 60px;
  min-width: 87vw;
  background-color: rgba(255, 255, 255, 0.603);
`;

export const HeadSectionBackgroundItemsStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadSectionBackgroundItemsTypographyStyles = styled.div`
  min-width: 40%;
  transform: translateX(140px);
`;

export const HeadSectionBackgroundItemsTypographyImageStyles = styled.img`
  position: absolute;
  z-index: -5;
  width: 1000px;
  transform: translate(-20px, -270px);
  opacity: 0.65;
`;

export const HeadSectionBackgroundItemsTypographyFirstStyles = styled.div`
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
`;

export const HeadSectionBackgroundItemsTypographyFirstSubStyles = styled.span`
  color: #ffffff !important;
  font-size: 26px;
`;

export const HeadSectionBackgroundItemsTypographySecondStyles = styled.div`
  margin-top: 13px;
  font-family: "Polya", cursive;
  color: #00b7ff !important;
  font-size: 3.65vw;
  font-weight: 400;
`;

export const HeadSectionBackgroundItemsTypographyTypedStyles = styled.h1`
  border-left: 9px solid #129ddd;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 2px;
  font-size: 25px;
  padding-left: 15px;
  color: #ff00b3;
`;

export const HeadSectionBackgroundItemsTypographyBtnGroupStyles = styled.div`
  margin-top: 40px;
`;

export const HeadSectionBackgroundItemsTypographyBtn1Styles = styled(
  CustomButton
)`
  background: rgb(255, 174, 0) !important;
  font-size: 20px !important;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    background: rgb(0, 195, 255) !important;
    box-shadow: 0px 1px 20px 5px rgba(255, 174, 0, 0.3) !important;
  }
`;

export const HeadSectionBackgroundItemsTypographyBtn2Styles = styled(
  CustomButton
)`
  background: rgb(0, 195, 255) !important;
  font-size: 20px !important;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    background: rgb(255, 174, 0) !important;
    box-shadow: 0px 1px 20px 5px rgba(0, 195, 255, 0.3) !important;
  }
`;

export const HeadSectionBackgroundItemsImageContainerStyles = styled.div`
  position: relative;
  top: 0px;
  transform: translateX(50px);
`;

export const HeadSectionBackgroundItemsImageImageStyles = styled.img`
  transform: translateY(-45px);
  height: 900px !important;
  width: 850px !important;
  padding: 0;
  margin-block: 0;
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
