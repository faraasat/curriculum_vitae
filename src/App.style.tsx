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

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const CvAppBodyAlignmentStyles = styled.section`
  box-sizing: border-box;
  display: inline-block;
  min-width: calc(100vw - 100px);
  max-width: calc(100vw - 100px);
  margin-left: 100px !important;

  @media only screen and (max-width: 500px) {
    margin-left: 0px !important;
    min-width: 100vw;
    max-width: 100vw;
  }
`;
