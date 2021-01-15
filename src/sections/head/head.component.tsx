// import ParticlesComponent from "../../components/particle-component/particle.component";
import ItIcon from "../../assets/hero_employee.svg";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import SendIcon from "@material-ui/icons/Send";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
  HeadSectionAlignmentStyles,
  HeadSectionBackgroundTopStyles,
  HeadSectionBackgroundImageStyles,
  HeadSectionContentAlignmentStyles,
  HeadSectionTypoStyles,
  HeadSectionTypoFirstStyles,
  HeadSectionTypoFirstSubStyles,
  HeadSectionTypoSecondStyles,
  HeadSectionTypoTypedStyles,
  HeadSectionTypoBtnGroupStyles,
  HeadSectionTypoBtn1Styles,
  HeadSectionTypoBtn2Styles,
  HeadSectionImgStyles,
  HeadSectionImageImgStyles,
} from "./head.style";
import Jello from "react-reveal/Jello";

export default function AboutSection() {
  const scrollToContact = () => {
    const section = document.querySelector("#contact-section-scroll");
    section!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeadSectionAlignmentStyles>
      <HeadSectionBackgroundTopStyles>
        <HeadSectionBackgroundImageStyles />
      </HeadSectionBackgroundTopStyles>
      <HeadSectionContentAlignmentStyles>
        <HeadSectionTypoStyles>
          <Jello>
            <HeadSectionTypoFirstStyles>
              <HeadSectionTypoFirstSubStyles>
                Hello
              </HeadSectionTypoFirstSubStyles>
              &nbsp;THERE EVERYONE, I AM
            </HeadSectionTypoFirstStyles>
          </Jello>
          <HeadSectionTypoSecondStyles>
            MR. FARASAT ALI
          </HeadSectionTypoSecondStyles>
          <HeadSectionTypoTypedStyles>
            <Typed
              strings={[
                "A Creative Web Developer",
                "A Creative Web Designer",
                "A Creative UI/UX Designer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </HeadSectionTypoTypedStyles>
          <HeadSectionTypoBtnGroupStyles>
            <HeadSectionTypoBtn1Styles
              txt1={`Download CV`}
              Ico={GetAppIcon}
              txt2="Download!"
            />
            <HeadSectionTypoBtn2Styles
              txt1="Send Message"
              Ico={SendIcon}
              txt2="Message!"
              onClick={scrollToContact}
            />
          </HeadSectionTypoBtnGroupStyles>
        </HeadSectionTypoStyles>
        <HeadSectionImgStyles>
          <HeadSectionImageImgStyles src={ItIcon} />
        </HeadSectionImgStyles>
      </HeadSectionContentAlignmentStyles>
    </HeadSectionAlignmentStyles>
  );
}
