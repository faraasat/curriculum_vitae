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
  const scrollToContact = () => {
    const section = document.querySelector("#contact-section-scroll");
    section!.scrollIntoView({ behavior: "smooth" });
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
              <ul>
                <li>
                  I am very passionate and open towards learning and discussing
                  about new technologies and frameworks!
                </li>
                <hr />
                <li>
                  I am student of Computer Science and persing my Bachelors
                  degree at Bahria University Karachi Campus.
                </li>
                <hr />
                <li>
                  I am currently working on a React Bootcamp and building my
                  portfolio.
                </li>
                <hr />
                <li>
                  In my free time, I love to read manga, watch animes and play
                  games.
                </li>
                <hr />
                <li>
                  You can contact me at any time at farasataliazeemi1@gmail.com.
                  I'll try to respond ASAP!!
                </li>
                <hr />
                <li>
                  Fun fact: I want to travel to and visit every country on this
                  planet.
                </li>
              </ul>
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
                  onClick={scrollToContact}
                />
              </AboutSectionContentContactTextBtnGroupStyles>
            </Fade>
          </AboutSectionContentContactTextStyles>
        </AboutSectionContentContentStyles>
      </AboutSectionContentContainerStyles>
    </AboutSectionAlignmentStyles>
  );
}
