import styled from "styled-components";

export const CvAppHeaderAlignmentStyles = styled.section`
  box-sizing: border-box;
  display: inline-block;
  position: fixed;
  max-width: 100px;
  min-width: 100px;

  @media only screen and (min-height: 800px) {
    height: 100vh;
  }
`;

export const CvAppBodyAlignmentStyles = styled.section`
  box-sizing: border-box;
  display: inline-block;
  max-width: 93.5%;
  min-width: 93.5%;
  margin-left: 100px !important;
`;
