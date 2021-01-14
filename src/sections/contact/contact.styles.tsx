import styled from "styled-components";
import { VectorMap } from "react-jvectormap";
import Contact from '../../assets/contact-us.jpg'

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
  padding-bottom: 60px;
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
  /* transform: translateY(-197px); */
  display: flex;
  align-items: center;
`;

export const ContactSectionBackground2Styles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
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

  & b {
    font-size: 65px;
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
`;

export const ContactSectionContactFormStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
