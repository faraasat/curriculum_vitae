import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import CallIcon from "@material-ui/icons/Call";
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
} from "./about.style";

export default function AboutSection() {
  const [changePanel, setChangePanel] = useState<boolean>(false);

  const handlePanelOpen = () => {
    return setChangePanel(!changePanel);
  };

  return (
    <AboutSectionAlignmentStyles>
      <AboutSectionHeadingTypographyStyles>
        <TypographyStyleTextPattern
          text={[
            { 1: "A", 2: "b", 3: "o", 4: "u" },
            { 1: "t", 2: "-", 3: "M", 4: "e" },
          ]}
        />
        <b>😊</b>
      </AboutSectionHeadingTypographyStyles>
      <AboutSectionContentContainerStyles>
        <AboutSectionContentContentStyles>
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
                <h1>Farasat Ali</h1>
                <p>Front-End Web Developer</p>
              </AboutSectionContentDetailsPersonalStyles>
            </AboutSectionContentDetailsStyles>
          </AboutSectionContentImgStyles>
          <AboutSectionContentContactTextStyles>
            <h2>
              I am currently studying, doing freelancing and as a result
              building my portfolio.
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum , but the a
              have suffered are some form, by injected humour, or the words
              which don't look even slightl. If you use a passage of, you need
              to be sure there isn't anything look even slightly believable. If
              you are going to use a of , you need to be sure there isn't hidden
              in the middle the on the tend.
            </p>
            <p>
              Embarrassing hidden in the middle of text. All the Lorem Ipsum
              generate on the are Internet tend to repeat predefined chunks as
              necessary, making of this the first true generator on the Internet
              which don't look even you.
            </p>
            <AboutSectionContentContactTextNameStyles>
              Farasat Ali
            </AboutSectionContentContactTextNameStyles>
            <AboutSectionContentContactTextTextStyles>
              Front End Web Developer
            </AboutSectionContentContactTextTextStyles>
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
          </AboutSectionContentContactTextStyles>
        </AboutSectionContentContentStyles>
      </AboutSectionContentContainerStyles>
    </AboutSectionAlignmentStyles>
  );
}
