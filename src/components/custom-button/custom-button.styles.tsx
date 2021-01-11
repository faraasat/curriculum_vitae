import styled from "styled-components";

export const CvCustomButtonTxt1ComponentStyles = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-3px);
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -o-transition: all 0.8s;
  transition: all 0.8s;
`;

export const CvCustomButtonTxt2ComponentStyles = styled.span`
  position: absolute;
  top: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  left: 0;
  right: 0;
  margin: auto;
  color: #fff;
  transition: all 0.8s;
`;

export const CvCustomButtonIconComponentStyles = styled.span`
  transform: translate(0px, 9px) !important;

  & > * {
    width: 30px !important;
    height: 30px !important;
  }
`;

export const CvCustomButtonComponentStyles = styled.button`
  outline: none;
  border: none;
  margin-right: 26px;
  position: relative;
  display: inline-block;
  outline: none;
  overflow: hidden;
  min-width: 200px;
  height: 60px;
  background: rgb(252, 194, 85);
  border-radius: 30px;
  text-align: center;
  line-height: 64px;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 1px 20px 10px rgba(255, 81, 126, 0.3);
    background: #ff517e;
  }

  &:hover ${CvCustomButtonTxt1ComponentStyles} {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
    position: relative;
    display: inline-block;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -ms-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
  }

  &:hover ${CvCustomButtonTxt2ComponentStyles} {
    top: 0%;
    position: absolute;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
    display: inline-block;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    -ms-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
  }
`;
