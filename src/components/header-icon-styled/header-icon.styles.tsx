import styled from "styled-components";
import HeaderIconComponent from "../header-icon/header-icon.component";

export const CvHeaderAboutIconIconStyles = styled.div`
  overflow: hidden;
  position: relative;
  margin: 18px 0 14px 0;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: 50% 100%;
    transition-duration: 0.5s;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const CvHeaderAboutIconStylingStyles = styled.button`
  position: relative;
  display: block;
  outline: none;
  overflow: hidden;
  text-align: center !important;
  outline: none;
  border: none;
  background-color: transparent;
  transition: all 0.5s;
  box-sizing: border-box;
`;

export const CvHeaderAboutIconStylingHoverVisibleStyles = styled(
  HeaderIconComponent
)`
  position: relative;
  display: inline-block;
  transition: all 0.3s;
`;

export const CvHeaderAboutIconStylingHoverHiddenStyles = styled(
  HeaderIconComponent
)`
  position: absolute;
  top: 100%;
  transform: translate3d(0, 0, 0);
  left: 0;
  right: 0;
  margin: auto;
  color: #fff;
`;

export const CvHeaderAboutIconStylingHoverHiddenTextStyles = styled.p`
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: -25px;
  margin: 0 auto;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
`;

export const CvHeaderAboutIconPositionStyles = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  height: 45px;

  &:hover ${CvHeaderAboutIconStylingStyles} {
    transform: translateY(-12px);
  }

  &:hover ${CvHeaderAboutIconStylingHoverVisibleStyles} {
    transform: translateY(-100%);
  }

  &:hover ${CvHeaderAboutIconStylingHoverHiddenStyles} {
    top: 25%;
    position: absolute;
    -o-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
  }

  &:hover ${CvHeaderAboutIconStylingHoverHiddenTextStyles} {
    bottom: -1px;
    opacity: 1;
    visibility: visible;
  }
`;
