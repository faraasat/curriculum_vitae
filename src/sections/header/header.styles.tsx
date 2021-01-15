import styled from "styled-components";

export const CvHeaderStyles = styled.section`
  box-shadow: 2px 0px 7px rgba(1, 1, 1, 0.5);
  box-sizing: border-box;
  height: 100%;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 5px solid transparent;
  border-image: linear-gradient(
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
  );
  border-image-slice: 1;
  /* animation: colorSlicer 1s linear infinite;

  @keyframes colorSlicer {
    0% {
      border-image-slice: 0;
    }

    70% {
      border-image-slice: 20;
    }

    100% {
      border-image-slice: 30;
    }
  } */
`;

export const CvHeaderImageStyles = styled.div`
  & > * {
    margin: 10px 0 20px 0;
    border-radius: 100px;
    box-shadow: 0px 0px 5px 1px rgba(1, 1, 1, 0.5);
    transition: all 0.3s ease-in;
    animation: pulse 2s infinite;
  }
  & > *:hover {
    transform: scale(1.04);
    box-shadow: 0px 0px 5px 2px rgba(1, 1, 1, 0.5);
    animation: pulse 1s infinite;
  }

  & > *:active {
    transform: scale(0.99);
    box-shadow: 0px 0px 2px 1px rgba(1, 1, 1, 0.5);
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export const CvHeaderIconsStyles = styled.div`
  margin: 0px 0;
  & hr {
    margin-block: 0em !important;
    height: 1px !important;
    background-color: rgb(190, 190, 190) !important;
    border: none !important;
  }
`;

export const CvHeaderSocialStyles = styled.div`
  /* margin: auto; */
  text-align: center;
  margin-top: 30px;
  margin-top: 30px;
`;

export const CvHeaderSocialTextStyles = styled.div`
  & p {
    width: 100%;
    font-size: 16px;
    color: #222222;
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    padding: 0;
    margin: 0;
    position: relative;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 11px;
  }

  &:hover p {
    color: #00aeff;
    cursor: pointer;
  }

  & p::after {
    content: "";
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 2px;
    height: 64px;
    background: #c4c4c4;
  }

  &:hover p::after {
    background: #00aeff;
  }
`;

export const CvHeaderSocialIconsStyles = styled.div`
  transform: translateY(80px);
  text-align: center;
  margin-bottom: 200px;

  & > a {
    text-decoration: none;
  }
`;

export const CvHeaderSocialIconFacebookStyles = styled.a`
  & > * {
    color: rgb(0, 47, 255) !important;
    padding-right: 5px;
    padding-bottom: 5px;
  }

  &:hover > * {
    transform: scale(1.09);
    color: rgb(55, 0, 255) !important;
  }

  &:active > * {
    transform: scale(0.99);
    color: rgb(76, 0, 255) !important;
  }
`;

export const CvHeaderSocialIconLinkedInStyles = styled.a`
  & > * {
    color: rgb(22, 3, 185) !important;
    padding-left: 5px;
    padding-bottom: 5px;
  }

  &:hover > * {
    transform: scale(1.09);
    color: rgb(50, 0, 187) !important;
  }

  &:active > * {
    transform: scale(0.99);
    color: rgb(42, 2, 134) !important;
  }
`;

export const CvHeaderSocialIconInstagramStyles = styled.a`
  & > * {
    color: rgb(255, 0, 242) !important;
    padding-right: 5px;
    padding-bottom: 5px;
  }

  &:hover > * {
    transform: scale(1.09);
    color: rgb(209, 4, 199) !important;
  }

  &:active > * {
    transform: scale(0.99);
    color: rgb(170, 2, 148) !important;
  }
`;

export const CvHeaderSocialIconGitHubStyles = styled.a`
  & > * {
    color: rgb(19, 19, 19) !important;
    padding-left: 5px;
    padding-bottom: 5px;
  }

  &:hover > * {
    transform: scale(1.09);
    color: rgb(77, 76, 76) !important;
  }

  &:active > * {
    transform: scale(0.99);
    color: rgb(121, 119, 119) !important;
  }
`;

export const CvHeaderSocialIconTelegramStyles = styled.a`
  & > * {
    color: rgb(0, 183, 255) !important;
    padding-right: 5px;
    padding-bottom: 5px;
  }

  &:hover > * {
    transform: scale(1.09);
    color: rgb(4, 168, 209) !important;
  }

  &:active > * {
    transform: scale(0.99);
    color: rgb(2, 108, 170) !important;
  }
`;

export const CvHeaderSocialIconWhatsAppStyles = styled.a`
  & > * {
    color: rgb(89, 240, 2) !important;
    padding-left: 5px;
    padding-bottom: 5px;
  }

  &:hover > * {
    transform: scale(1.09);
    color: rgb(59, 184, 2) !important;
  }

  &:active > * {
    transform: scale(0.99);
    color: rgb(23, 182, 2) !important;
  }
`;

export const CvHeaderSocialIconTwitterStyles = styled.a`
  & > * {
    color: rgb(0, 225, 255) !important;
  }

  &:hover > * {
    transform: scale(1.09);
    color: rgb(7, 220, 228) !important;
  }

  &:active > * {
    transform: scale(0.99);
    color: rgb(4, 205, 231) !important;
  }
`;
