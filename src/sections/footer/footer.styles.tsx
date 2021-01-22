import styled from "styled-components";

export const FooterAlignmentStyles = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: radial-gradient(circle, #234130, #5c2b2b);
  padding: 50px 0px 50px 0px;
`;

export const FooterContentAlignmentStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContentContainerStyles = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 1150px) {
    width: 90%;
    justify-content: center;

    & > :not(:first-child) {
      margin-left: 25px;
    }
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    & > :not(:first-child) {
      margin-left: 0px;
      margin-top: 10px;
    }
  }
`;

export const FooterContentIndividualStyles = styled.div`
  .footer-content-alignment {
    width: 21vw;
    padding: 15px 0px;
    background: linear-gradient(240deg, #cdffac, #b5e8ff);
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
      background: linear-gradient(240deg, #b5e8ff, #cdffac);
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 1150px) {
    .footer-content-alignment {
      width: 26.132vw !important;
    }
  }

@media only screen and (max-width: 850px) {
  .footer-content-alignment {
    width: 70vw !important;
  }
}

@media only screen and (max-width: 400px) {
  .footer-content-alignment {
    width: 90vw !important;
  }
}
`;

export const FooterContentHeadingStyles = styled.h1`
  font-size: 23px;
  background: -webkit-linear-gradient(150deg, #adff61, #ff7a2d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media only screen and (max-width: 850px) {
    font-size: 30px;
  }
`;

export const FooterContentParaStyles = styled.p`
  color: #868686;
  font-size: 16px;
  word-wrap: break-word;

  @media only screen and (max-width: 920px) {
    font-size: 13.5px;
  }

  @media only screen and (max-width: 850px) {
    font-size: 19px;
  }
`;
