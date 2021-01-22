import styled from "styled-components";
import Portfolio from "../../assets/portfolio.jpg";

export const PortfolioShowAlignmentStyles = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    150deg,
    rgba(227, 115, 255, 0.35),
    rgba(255, 137, 157, 0.35)
  );
`;

export const PortfolioShowTypoStyles = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
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
    margin-bottom: 10px;
    & * {
      font-size: 12.5vw !important;
    }

    & b {
      font-size: 27px;
    }
  }

  @media only screen and (max-width: 590px) {
    & * {
      font-size: 14vw !important;
    }

    & b {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 290px) {
    & * {
      font-size: 12vw !important;
    }

    & b {
      font-size: 20px;
    }
  }
`;

export const PortfolioShowContainerStyles = styled.div`
  position: relative;
  width: 95%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 400px) {
    width: 80%;
  }
`;

export const PortfolioShowImgAlignmentStyles = styled.div`
  user-select: none;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -20;
`;

export const PortfolioShowImgStyles = styled.div`
  background-image: url(${Portfolio});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100% !important;
`;

export const PortfolioShowBtnStyles = styled.a`
  padding: 20px 35px;
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bolder;
  background-image: linear-gradient(
    to right,
    #3ddffc 0%,
    #ffc271 51%,
    #3ddffc 100%
  );
  text-align: center;
  text-transform: uppercase;
  background-size: 200% auto;
  transition: 0.5s;
  color: white;
  box-shadow: 0 0 20px #abb5b6;
  border-radius: 10px;

  &:hover {
    background-position: right center;
    color: #ffffff;
    text-decoration: none;
  }

  & span svg {
    transform: translate(2px, 5px);
  }

  @media only screen and (max-width: 300px) {
    padding: 15px 25px;
    font-size: 12px;
  }

  @media only screen and (max-width: 300px) {
    padding: 12px 17px;
    font-size: 11px;
  }
`;

export const PortfolioShowBtnContainer = styled.span`
  margin-top: 30px;
  margin-bottom: 90px;
`;
