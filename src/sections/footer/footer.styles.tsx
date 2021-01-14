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
`;

export const FooterContentIndividualStyles = styled.div`
  .footer-content-alignment {
    width: 21vw;
    padding: 15px 0px;
    background: linear-gradient(240deg, #cdffac, #b5e8ff);
  }
`;

export const FooterContentHeadingStyles = styled.h1`
  font-size: 23px;
  background: -webkit-linear-gradient(150deg, #adff61, #ff7a2d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const FooterContentParaStyles = styled.p`
  color: #868686;
  font-size: 16px;
`;
