import styled from "styled-components";

export const LineCardItemsLeftStyles = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .react-reveal:nth-child(1)  {
    z-index: 5;
  }

  & .react-reveal:nth-child(2)  {
    z-index: 1;
  }

  @media only screen and (max-width: 1150px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 760px) {
    flex-direction: column;
    margin: 25px 0px;
    transform: translateX(-15px);
  }
`;

export const LineCardItemsLeftRoundYearStyles = styled.div`
  &:after {
    background: ${(props) => props.color};
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    z-index: 21;
    transform: translate(282.9px, -77.1px);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
  }

  &:hover:after {
    filter: brightness(70%);
  }

  & h1 {
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};
    border: 10px solid;
    text-align: center;
    width: 125px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 21px;
    transform: translateX(110px);
    font-weight: 600;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;

    &:before {
      border-color: ${(props) => props.color};
      content: "";
      width: 20px;
      height: 20px;
      background: rgb(245, 245, 245);
      position: absolute;
      transform: translateX(105px);
      border-radius: 50%;
      border: 2px solid;
      z-index: 10;
    }

    &:after {
      border-left-color: ${(props) => props.color};
      content: "";
      border-right: 15px solid transparent;
      border-bottom: 13px solid transparent;
      border-top: 13px solid transparent;
      border-left: 15px solid ${(props) => props.color};
      position: absolute;
      top: 100px;
      transform: translate(86.5px, -50px);
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }
  }

  & h1:hover {
    border: 10px solid transparent !important;
    width: 125px !important;
    height: 125px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: linear-gradient(
      150deg,
      #a3ff6e,
      #f0ff6e,
      #ffd86e,
      #ffa36e,
      #b7f8db,
      #50a7c2,
      #00aeff,
      #f184ff,
      #ff70e7,
      #ff9ebb,
      #9effdf,
      #9effab
    ) !important;
    border-radius: 100px !important;
  }

  & h1:hover span {
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 125px;
    height: 125px;
    border-radius: 100px;
  }

  & h1:hover:after {
    border-left-color: lightblue !important;
  }

  @media only screen and (max-width: 1150px) {
    & h1 {
      transform: translate(-13px, 0px) !important;

      &:before {
        display: none;
      }
    }
    &:after {
      display: none;
    }
  }

  @media only screen and (max-width: 760px) {
    & h1 {
      transform: translate(-100%, -33px) !important;

      &:before {
        display: none;
      }

      &:after {
        border-right: 13px solid transparent;
        border-bottom: 15px solid transparent;
        border-top: 15px solid ${(props) => props.color};
        border-left: 13px solid transparent;
        top: 134px;
        transform: translate(0px, 0px);
      }
    }
    &:after {
      display: none;
    }
  }
`;

export const LineCardItemsLeftBoxStyles = styled.div`
  cursor: pointer;
  transform: translateX(210px);
  width: 350px;
  background: #ffffff;
  padding: 20px 40px 20px 40px;
  text-align: left;
  position: relative;
  transition: all 1s ease-in;
  z-index: 110;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);

  &:hover {
    transform: translate(210px, -25px);
  }

  @media only screen and (max-width: 1150px) {
    transform: translate(13px, 0px);
    padding: 20px 30px 20px 30px;

    &:hover {
      transform: translate(13px, 0px);
    }
  }
`;

export const LineCardItemsLeftBoxTagStyles = styled.div`
  left: -10%;
  box-shadow: -10px 2px 9px 0px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: -10px 2px 9px 0px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: -10px 2px 9px 0px rgba(0, 0, 0, 0.09);
  text-align: center;
  background: #fff;
  position: absolute;
  width: 75%;
  top: -18px;

  @media only screen and (max-width: 1150px) {
    left: -5%;
    width: 110%;
  }
`;

export const LineCardItemsLeftBoxTagBoxStyles = styled.div`
  display: flex;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    transform: translateX(-33px);
    z-index: 11;
    border-left: 17px solid #fff0;
    border-right: 17px solid #ffffff;
    border-top: 11px solid #ffbf0b00;
    border-bottom: 11px solid #f70d0d00;
    top: 11px;
  }

  @media only screen and (max-width: 1150px) {
    &:before {
      display: none;
    }
  }
`;

export const LineCardItemsLeftBoxTagLeftTitleStyles = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    color: #010101;
    font-weight: 600;
    font-size: 18px;
    padding-top: 10px;
    bottom: 10px;
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
`;

export const LineCardItemsLeftBoxTagRightTitleStyles = styled.div`
  width: 75%;

  & h1 {
    background-color: ${(props) => props.color};
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    padding: 10px 0;
  }
`;

export const LineCardItemsLeftBoxInfoStyles = styled.h3`
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  margin: 20px 0 10px 0;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const LineCardItemsLeftBoxParaStyles = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #777777;
  margin: 0;
  padding: 0;
`;

//////// RIGHT //////////////////
export const LineCardItemsRightStyles = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1150px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 760px) {
    flex-direction: column-reverse;
    margin: 25px 0px;
    transform: translateX(5.8px);
  }
`;

export const LineCardItemsRightRoundYearStyles = styled.div`
  &:after {
    background: ${(props) => props.color};
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    z-index: 20;
    transform: translate(-148.3px, -77.5px);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
  }

  &:hover:after {
    filter: brightness(70%);
  }

  & h1 {
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};
    border: 10px solid;
    text-align: center;
    width: 125px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 21px;
    transform: translateX(-110px);
    font-weight: 600;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
  }

  & h1:before {
    content: "";
    width: 20px;
    height: 20px;
    background: rgb(245, 245, 245);
    position: absolute;
    transform: translateX(-105.5px);
    border-radius: 50%;
    border: 2px solid ${(props) => props.color};
    z-index: 10;
  }

  & h1:after {
    content: "";
    border-left: 15px solid transparent;
    border-bottom: 13px solid transparent;
    border-top: 13px solid transparent;
    border-right: 15px solid ${(props) => props.color};
    position: absolute;
    top: 100px;
    transform: translate(-86px, -50px);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  & h1:hover {
    border: 10px solid transparent !important;
    width: 125px !important;
    height: 125px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: linear-gradient(
      150deg,
      #a3ff6e,
      #f0ff6e,
      #ffd86e,
      #ffa36e,
      #b7f8db,
      #50a7c2,
      #00aeff,
      #f184ff,
      #ff70e7,
      #ff9ebb,
      #9effdf,
      #9effab
    ) !important;
    border-radius: 100px !important;
  }

  & h1:hover span {
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 125px;
    height: 125px;
    border-radius: 100px;
  }

  & h1:hover:after {
    border-right-color: #c72cf7 !important;
  }

  & h1 br {
    margin-block: 0em;
  }

  @media only screen and (max-width: 1150px) {
    & h1 {
      transform: translate(13px, 0px) !important;

      &:before {
        display: none;
      }
    }
    &:after {
      display: none;
    }
  }

  @media only screen and (max-width: 760px) {
    & h1 {
      transform: translate(100%, -33px) !important;

      &:before {
        display: none;
      }

      &:after {
        border-right: 13px solid transparent;
        border-bottom: 15px solid transparent;
        border-top: 15px solid ${(props) => props.color};
        border-left: 13px solid transparent;
        top: 134px;
        transform: translate(0px, 0px);
      }
    }
    &:after {
      display: none;
    }
  }
`;

export const LineCardItemsRightBoxStyles = styled.div`
  cursor: pointer;
  transform: translateX(-210px);
  width: 350px;
  background: #ffffff;
  padding: 20px 40px 20px 40px;
  text-align: left;
  position: relative;
  transition: all 1s ease-in;
  z-index: 110;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);

  &:hover {
    transform: translate(-210px, -25px);
  }

  @media only screen and (max-width: 1150px) {
    transform: translate(-13px, 0px);
    padding: 20px 30px 20px 30px;

    &:hover {
      transform: translate(-13px, 0px);
    }
  }
`;

export const LineCardItemsRightBoxTagStyles = styled.div`
  right: -10%;
  box-shadow: -10px 2px 9px 0px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: -10px 2px 9px 0px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: -10px 2px 9px 0px rgba(0, 0, 0, 0.09);
  text-align: center;
  background: #fff;
  position: absolute;
  width: 75%;
  top: -18px;

  @media only screen and (max-width: 1150px) {
    left: -5%;
    width: 110%;
  }
`;

export const LineCardItemsRightBoxTagBoxStyles = styled.div`
  display: flex;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    transform: translateX(322px);
    z-index: 11;
    border-left: 17px solid #ffffff;
    border-right: 17px solid #ffffff00;
    border-top: 11px solid #ffbf0b00;
    border-bottom: 10px solid #f70d0d00;
    top: 11px;
  }

  @media only screen and (max-width: 1150px) {
    &:before {
      display: none;
    }
  }
`;

export const LineCardItemsRightBoxTagLeftTitleStyles = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    color: #010101;
    font-weight: 600;
    font-size: 18px;
    padding-top: 10px;
    bottom: 10px;
    margin: 0;
    padding: 0;
    font-weight: bolder;
  }
`;
export const LineCardItemsRightBoxTagRightTitleStyles = styled.div`
  width: 75%;

  & h1 {
    background: ${(props) => props.color};
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    padding: 10px 0;
  }
`;

export const LineCardItemsRightBoxInfoStyles = styled.h3`
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  margin: 20px 0 10px 0;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const LineCardItemsRightBoxParaStyles = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #777777;
  margin: 0;
  padding: 0;
`;
