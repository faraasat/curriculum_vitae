import styled from "styled-components";

export const CvAppHeaderAlignmentStyles = styled.section`
  box-sizing: border-box;
  display: inline-block;
  position: fixed;
  max-width: 100px;
  min-width: 100px;
  min-height: 760px;
  height: auto !important;
  height: 100vh;
  z-index: 500;

  @media only screen and (max-width: 590px) {
    display: none;
  }
`;

export const CvAppBodyAlignmentStyles = styled.section`
  box-sizing: border-box;
  display: inline-block;
  min-width: calc(100vw - 100px);
  max-width: calc(100vw - 100px);
  margin-left: 100px !important;

  @media only screen and (max-width: 590px) {
    margin-left: 0px !important;
    min-width: 100vw;
    max-width: 100vw;
  }
`;
