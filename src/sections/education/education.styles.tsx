import styled from "styled-components";
import myImage from "../../assets/education.svg";

export const EducationSectionAlignmentStyles = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: auto;
`;

export const EducationSectionBackgroundStyles = styled.div`
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0px;
  bottom: 0px;
  z-index: -5;
`;

export const EducationSectionBackgroundImageStyles = styled.div`
  background-image: url(${myImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100% !important;
  opacity: 0.3;
`;

export const EducationSectionContainerBackgroundStyles = styled.div`
  z-index: 3;
  width: 100%;
  background-image: linear-gradient(
    150deg,
    rgba(255, 238, 1, 0.6),
    rgba(202, 100, 250, 0.5),
    rgba(153, 209, 255, 0.8),
    rgba(0, 255, 0, 0.5)
  ) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const EducationSectionContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EducationSectionHeadingStyles = styled.div`
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

  @media only screen and (max-width: 800px) {
    & * {
      font-size: 10vw !important;
    }

    & b {
      font-size: 27px;
    }
  }

  @media only screen and (max-width: 590px) {
    & * {
      font-size: 10vw !important;
    }

    & b {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 510px) {
    & * {
      font-size: 10vw !important;
      margin-top: 35px;
    }

    & b {
      padding-left: 5px;
      padding-right: 2px;
      font-size: 30px;
    }
  }
`;

export const EducationSectionContentStyles = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin: 35px 0px;
  }
`;

export const EducationSectionContentLineStyles = styled.div`
  position: absolute;
  width: 4px !important;
  z-index: 0;
  height: 1408px !important;
  transform: translateY(7%);
  background: radial-gradient(
    circle,
    #a3ff6e,
    #f0ff6e,
    #ffd86e,
    #ffa36e,
    #b7f8db,
    #50a7c2,
    #00aeff,
    #f184ff,
    #ff70e7,
    #ff9ebb,
    #9effdf,
    #9effab,
    #593170
  ) !important;
  border-radius: 100px !important;
  cursor: pointer;

  &:hover {
    background: radial-gradient(
      circle,
      #593170,
      #9effab,
      #9effdf,
      #ff9ebb,
      #ff70e7,
      #f184ff,
      #00aeff,
      #50a7c2,
      #b7f8db,
      #ffa36e,
      #ffd86e,
      #f0ff6e,
      #a3ff6e
    ) !important;
  }

  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;
