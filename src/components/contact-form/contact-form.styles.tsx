import styled from "styled-components";

export const ContactFormAlignmentStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: rgba(234, 242, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 0px 15px 5px rgba(1, 1, 1, 0.4);
`;

export const ContactFormTypoAlignmentStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const ContactFormTypographyStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactFormTypographyTypoStyles = styled.h1`
  font-family: "Luckiest Guy", cursive;
  font-size: 35px;
  margin: 15px 0px;
  color: #3bb4fa;
  cursor: pointer;

  @media only screen and (max-width: 270px) {
    font-size: 12.5vw;
  }
`;

export const ContactFormFormAlignmentStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 30px;
  width: 100%;
`;

export const ContactFormLineAlignmentStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > :nth-child(1) {
    margin-right: 9px;
    width: 44%;
  }

  & > :nth-child(2) {
    width: 44%;
  }

  &:not(:first-child) {
    margin-top: 17px;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;

    & > :nth-child(1) {
      margin-right: 0px;
      width: 90%;
    }

    & > :nth-child(2) {
      margin-top: 17px;
      width: 90%;
    }
  }
`;

export const ContactFormTextBoxAlignmentStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 91%;
  margin: 17px 0px 0px 0px;

  & > * {
    width: 100%;
  }
`;

export const ContactFormBtnStyling = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    margin: 0;
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media only screen and (max-width: 270px) {
    & button {
      margin: 0;
      padding-left: 1vw !important;
      padding-right: 1vw !important;
      font-size: 12px;
      min-width: 160px;
      height: 50px;
      line-height: 54px;

      & .cv-custom-button-icon-access {
        width: 17px !important;
        height: 17px !important;
        transform: translateY(-6px) !important;
      }
    }
  }
`;
