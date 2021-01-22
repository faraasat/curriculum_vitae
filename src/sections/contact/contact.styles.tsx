import styled from "styled-components";
import { VectorMap } from "react-jvectormap";
import Contact from "../../assets/contact-us.jpg";

export const ContactSectionAlignmentStyles = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    150deg,
    rgba(98, 50, 110, 0.7),
    rgba(104, 54, 62, 0.7)
  );
  padding-bottom: 90px;
`;

export const ContactSectionImgBackgroundStyles = styled.div`
  user-select: none;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -20;
`;

export const ContactSectionImgStyles = styled.div`
  background-image: url(${Contact});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  width: 100%;
  height: 100% !important;
`;

export const ContactSectionBackgroundStyles = styled.div`
  position: relative;
  width: 95%;
  height: 34vw;
  user-select: none;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1130px) {
    flex-direction: column-reverse;
    margin-top: 250px;
  }

  @media only screen and (max-width: 775px) {
    margin-top: 280px;
  }

  @media only screen and (max-width: 700px) {
    margin-top: 450px;
  }

  @media only screen and (max-width: 615px) {
    margin-top: 465px;
  }

  @media only screen and (max-width: 590px) {
    margin-top: 485px;
  }

  @media only screen and (max-width: 520px) {
    margin-top: 500px;
  }

  @media only screen and (max-width: 470px) {
    margin-top: 580px;
  }
`;

export const ContactSectionBackground2Styles = styled.div`
  position: relative;
  width: 100% !important;
  height: 100% !important;
  user-select: none;

  @media only screen and (max-width: 1130px) {
    height: 500px !important;
    transform: translateY(215px);
  }
`;

export const ContactSectionTypoContainerStyles = styled.div`
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactSectionBackgroundImageStyles = styled(VectorMap)`
  position: absolute;
`;

export const ContactSectionHeadingStyles = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  & b {
    font-size: 80px;
    padding-left: 15px;
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
    & * {
      font-size: 12.5vw !important;
    }

    & b {
      font-size: 26px;
    }
  }

  @media only screen and (max-width: 355px) {
    & * {
      font-size: 12vw !important;
    }

    & b {
      display: none;
    }
  }
`;

export const ContactSectionContactFormStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 950px !important;

  @media only screen and (max-width: 1450px) {
    width: 1000px !important;
    z-index: 500;
  }

  @media only screen and (max-width: 1130px) {
    width: 70% !important;
  }

  @media only screen and (max-width: 900px) {
    width: 85% !important;
  }

  @media only screen and (max-width: 770px) {
    width: 95% !important;
  }
`;
