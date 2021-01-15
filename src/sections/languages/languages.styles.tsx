import styled from "styled-components";

export const LanguageSectionContentStyles = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageSectionContentContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LanguageSectionContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;

  & > ${LanguageSectionContentStyles}:not(:first-child) {
    margin-left: 15px;
  }

  & .languages-section-content__1 .circular-progress-access-class {
    transform: translate(-105px, 50px) !important;
  }

  & .languages-section-content__2 .circular-progress-access-class {
    transform: translate(-108px, 50px) !important;
  }

  @media only screen and (max-width: 700px) {
    width: 95%;
  }

  @media only screen and (max-width: 510px) {
    width: 99%;
  }
`;

export const LanguageSectionAlignmentStyles = styled.section`
  padding: 30px 0px 70px 0px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    150deg,
    rgba(140, 219, 233, 0.2),
    rgba(166, 233, 140, 0.2)
  );
`;

export const LanguageSectionTypoStyles = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

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
      margin-bottom: 10px;
    & * {
      font-size: 10vw !important;
    }

    & b {
      font-size: 27px;
    }
  }

  @media only screen and (max-width: 590px) {
    & * {
      font-size: 12.2vw !important;
    }

    & b {
      font-size: 33px;
    }
  }
`;

export const LanguageSectionContentParaStyles = styled.p`
  color: #ad9a9a;
  text-align: center;
  margin-top: 15px;
`;
