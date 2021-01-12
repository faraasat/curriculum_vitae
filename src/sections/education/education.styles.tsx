import styled from "styled-components";
import myImage from "../../assets/education.svg";

export const EducationSectionAlignmentStyles = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: auto;
`;

export const EducationSectionBackgroundStyles = styled.div`
  user-select: none;
  position: absolute;
  top: 1720px;
  left: 100px;
  z-index: -5;
`;

export const EducationSectionBackgroundImageStyles = styled.div`
  background-image: url(${myImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 93vw;
  height: 1670px !important;
  height: auto;
  opacity: 0.3;
`;

export const EducationSectionContainerBackgroundStyles = styled.div`
  z-index: 3;
  width: 93vw;
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
  }

  &:hover {
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
  z-index: -1;
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
    position: absolute;
    width: 4px !important;
    z-index: 5;
    height: 1408px !important;
    transform: translateY(7%);
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
`;
