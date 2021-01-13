import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import CallIcon from "@material-ui/icons/Call";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
  AboutSectionAlignmentStyles,
  AboutSectionContentContactTextBtn1Styles,
  AboutSectionContentContactTextBtn2Styles,
  AboutSectionContentContactTextBtnGroupStyles,
  AboutSectionContentContactTextNameStyles,
  AboutSectionContentContactTextStyles,
  AboutSectionContentContactTextTextStyles,
  AboutSectionContentContainerStyles,
  AboutSectionContentContentStyles,
  AboutSectionContentDetailsPersonalStyles,
  AboutSectionContentDetailsStyles,
  AboutSectionContentImgInfoIcon1Styles,
  AboutSectionContentImgInfoIcon2Styles,
  AboutSectionContentImgInfoIconStyles,
  AboutSectionContentImgInfoStyles,
  AboutSectionContentImgStyles,
  AboutSectionContentImgWrapperStyles,
  AboutSectionHeadingTypographyStyles,
  AboutSectionContentIconsTextStyles,
  AboutSectionContentIconsLinkStyles,
} from "./about.style";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Jump from "react-reveal/Jump";

export default function AboutSection() {
  const [changePanel, setChangePanel] = useState<boolean>(false);

  const handlePanelOpen = () => {
    return setChangePanel(!changePanel);
  };

  return (
    <AboutSectionAlignmentStyles>
      <AboutSectionHeadingTypographyStyles>
        <TypographyStyleTextPattern
          id="about-section-scroll"
          text={[
            { 1: "A", 2: "b", 3: "o", 4: "u" },
            { 1: "t", 2: "-", 3: "M", 4: "e" },
          ]}
        />
        <b>😊</b>
      </AboutSectionHeadingTypographyStyles>
      <AboutSectionContentContainerStyles>
        <AboutSectionContentContentStyles>
          <Fade left>
            <AboutSectionContentImgStyles panel={changePanel}>
              <AboutSectionContentImgWrapperStyles>
                <img src="https://source.unsplash.com/random" alt="about" />
                <AboutSectionContentImgInfoStyles panel={changePanel}>
                  <AboutSectionContentImgInfoIconStyles>
                    <button onClick={handlePanelOpen}>
                      <AboutSectionContentImgInfoIcon1Styles
                        icon={faPlus}
                        panel={changePanel}
                      />
                      <AboutSectionContentImgInfoIcon2Styles
                        icon={faMinus}
                        panel={changePanel}
                      />
                    </button>
                  </AboutSectionContentImgInfoIconStyles>
                </AboutSectionContentImgInfoStyles>
              </AboutSectionContentImgWrapperStyles>
              <AboutSectionContentDetailsStyles panel={changePanel}>
                <AboutSectionContentDetailsPersonalStyles>
                  <Flip top>
                    <h1>Farasat Ali</h1>
                    <h6>Front-End Web Developer</h6>
                    <span>
                      <h2>Age</h2> <p>20</p>
                    </span>
                    <span>
                      <h2>Address</h2> <p>Karachi, Sindh, Pakistan</p>
                    </span>
                    <span>
                      <h2>Email</h2> <p>farasataliazeemi1@gmail.com</p>
                    </span>
                    <span>
                      <h2>Residence</h2> <p>PK</p>
                    </span>
                    <span>
                      <h2>Phone</h2> <p>+92-xxx-xxxxxxx</p>
                    </span>
                    <span>
                      <h2>Freelance</h2> <p>Available</p>
                    </span>
                  </Flip>
                  <Jump>
                    <AboutSectionContentIconsTextStyles>
                      <AboutSectionContentIconsLinkStyles
                        href="https://facebook.com/FarasatAliAzeemi/"
                        target="_new"
                      >
                        <FacebookIcon />
                      </AboutSectionContentIconsLinkStyles>
                      <AboutSectionContentIconsLinkStyles
                        href="https://www.linkedin.com/in/faraasat/"
                        target="_new"
                      >
                        <LinkedInIcon />
                      </AboutSectionContentIconsLinkStyles>
                      <AboutSectionContentIconsLinkStyles
                        href="https://github.com/faraasat"
                        target="_new"
                      >
                        <GitHubIcon />
                      </AboutSectionContentIconsLinkStyles>
                      <AboutSectionContentIconsLinkStyles
                        href="https://www.instagram.com/farasat_ali_azeemi/"
                        target="_new"
                      >
                        <InstagramIcon />
                      </AboutSectionContentIconsLinkStyles>
                      <AboutSectionContentIconsLinkStyles
                        href="https://t.me/farasat_azeemi/"
                        target="_new"
                      >
                        <TelegramIcon />
                      </AboutSectionContentIconsLinkStyles>
                      <AboutSectionContentIconsLinkStyles
                        href="https://wa.link/7xeqob"
                        target="_new"
                      >
                        <WhatsAppIcon />
                      </AboutSectionContentIconsLinkStyles>
                    </AboutSectionContentIconsTextStyles>
                  </Jump>
                </AboutSectionContentDetailsPersonalStyles>
              </AboutSectionContentDetailsStyles>
            </AboutSectionContentImgStyles>
          </Fade>
          <AboutSectionContentContactTextStyles>
            <Fade right>
              <h2>
                I am currently studying, doing freelancing and as a result
                building my portfolio.
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum , but the a
                have suffered are some form, by injected humour, or the words
                which don't look even slightl. If you use a passage of, you need
                to be sure there isn't anything look even slightly believable.
                If you are going to use a of , you need to be sure there isn't
                hidden in the middle the on the tend.
              </p>
              <p>
                Embarrassing hidden in the middle of text. All the Lorem Ipsum
                generate on the are Internet tend to repeat predefined chunks as
                necessary, making of this the first true generator on the
                Internet which don't look even you.
              </p>
              <AboutSectionContentContactTextNameStyles>
                Farasat Ali
              </AboutSectionContentContactTextNameStyles>
              <AboutSectionContentContactTextTextStyles>
                Front End Web Developer
              </AboutSectionContentContactTextTextStyles>
            </Fade>
            <Fade top>
              <AboutSectionContentContactTextBtnGroupStyles>
                <AboutSectionContentContactTextBtn1Styles
                  txt1="Download CV"
                  Ico={GetAppIcon}
                  txt2="Download!"
                />
                <AboutSectionContentContactTextBtn2Styles
                  txt1="Contact Me"
                  Ico={CallIcon}
                  txt2="Contact!"
                />
              </AboutSectionContentContactTextBtnGroupStyles>
            </Fade>
          </AboutSectionContentContactTextStyles>
        </AboutSectionContentContentStyles>
      </AboutSectionContentContainerStyles>
    </AboutSectionAlignmentStyles>
  );
}
