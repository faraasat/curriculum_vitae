import ParticlesComponent from "../../components/particle-component/particle.component";
import ItIcon from "../../assets/hero_employee.svg";
import Bg from "../../assets/bg-2.svg";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import SendIcon from "@material-ui/icons/Send";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
  HeadSectionBackgroundContainerStyles,
  HeadSectionBackgroundItemsImageContainerStyles,
  HeadSectionBackgroundItemsStyles,
  HeadSectionBackgroundItemsTypographyBtn1Styles,
  HeadSectionBackgroundItemsTypographyBtn2Styles,
  HeadSectionBackgroundItemsTypographyBtnGroupStyles,
  HeadSectionBackgroundItemsTypographyFirstStyles,
  HeadSectionBackgroundItemsTypographyFirstSubStyles,
  HeadSectionBackgroundItemsTypographyImageStyles,
  HeadSectionBackgroundItemsTypographySecondStyles,
  HeadSectionBackgroundItemsTypographyStyles,
  HeadSectionBackgroundItemsTypographyTypedStyles,
  HeadSectionBackgroundStyles,
  HeadSectionParticleAlignmentStyles,
  HeadSectionBackgroundItemsImageImageStyles,
} from "./head.style";
import Jello from "react-reveal/Jello";

export default function AboutSection() {
  return (
    <>
      <HeadSectionParticleAlignmentStyles>
        <ParticlesComponent />
      </HeadSectionParticleAlignmentStyles>
      <HeadSectionBackgroundStyles>
        <HeadSectionBackgroundContainerStyles>
          <HeadSectionBackgroundItemsStyles>
            <HeadSectionBackgroundItemsTypographyStyles>
              <HeadSectionBackgroundItemsTypographyImageStyles
                src={Bg}
                alt="background 2"
              />
              <Jello>
                <HeadSectionBackgroundItemsTypographyFirstStyles>
                  <HeadSectionBackgroundItemsTypographyFirstSubStyles>
                    HELLO
                  </HeadSectionBackgroundItemsTypographyFirstSubStyles>{" "}
                  &nbsp;THERE EVERYONE, I AM
                </HeadSectionBackgroundItemsTypographyFirstStyles>
              </Jello>
              <HeadSectionBackgroundItemsTypographySecondStyles>
                Mr. Farasat Ali
              </HeadSectionBackgroundItemsTypographySecondStyles>
              <HeadSectionBackgroundItemsTypographyTypedStyles>
                <Typed
                  strings={[
                    "Creative Web Developer",
                    "Creative Web Designer",
                    "Creative UI/UX Designer",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </HeadSectionBackgroundItemsTypographyTypedStyles>
              <HeadSectionBackgroundItemsTypographyBtnGroupStyles>
                <HeadSectionBackgroundItemsTypographyBtn1Styles
                  txt1={`Download CV`}
                  Ico={GetAppIcon}
                  txt2="Download!"
                />
                <HeadSectionBackgroundItemsTypographyBtn2Styles
                  txt1="Send Message"
                  Ico={SendIcon}
                  txt2="Message!"
                />
              </HeadSectionBackgroundItemsTypographyBtnGroupStyles>
            </HeadSectionBackgroundItemsTypographyStyles>
            <HeadSectionBackgroundItemsImageContainerStyles>
              <HeadSectionBackgroundItemsImageImageStyles
                src={ItIcon}
                alt="IT"
                draggable="false"
              />
            </HeadSectionBackgroundItemsImageContainerStyles>
          </HeadSectionBackgroundItemsStyles>
        </HeadSectionBackgroundContainerStyles>
      </HeadSectionBackgroundStyles>
    </>
  );
}
