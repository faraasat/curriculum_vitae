import ParticlesComponent from "../../components/particle-component/particle.component";
import "./about.styles.css";
import ItIcon from "../../assets/hero_employee.svg";
import Bg from "../../assets/bg-2.svg";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import CustomButton from "../../components/custom-button/custom-button.component";
import SendIcon from "@material-ui/icons/Send";
import GetAppIcon from "@material-ui/icons/GetApp";
import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import {
  LineCardLeftComponent,
  LineCardRightComponent,
} from "../../components/line-cards/line-cards.component";

export default function AboutSection() {
  return (
    <section>
      <section className="about-section-particle-alignment">
        <ParticlesComponent />
      </section>
      <section className="about-section-background">
        <div className="about-section-background__container">
          <div className="about-section-background__items">
            <div className="about-section-background__items-typography">
              <img
                src={Bg}
                alt="background 2"
                className="about-section-background__items-typography__image"
              />
              <div className="about-section-background__items-typography__first">
                <span className="about-section-background__items-typography__first__sub">
                  HELLO
                </span>{" "}
                &nbsp;THERE!!!
              </div>
              <div className="about-section-background__items-typography__second">
                Mr. Farasat Ali
              </div>
              <h1 className="about-section-background__items-typography__typed">
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
              </h1>
              <div className="about-section-background__items-typography__btn-group">
                <CustomButton
                  className={
                    "about-section-background__items-typography__btn-1"
                  }
                  txt1={`Download CV`}
                  Ico={GetAppIcon}
                  txt2="Download!"
                />
                <CustomButton
                  className={
                    "about-section-background__items-typography__btn-2"
                  }
                  txt1="Send Message"
                  Ico={SendIcon}
                  txt2="Message!"
                />
              </div>
            </div>
            <div className="about-section-background__items-image__container">
              <img
                src={ItIcon}
                alt="IT"
                className="about-section-background__items-image__image"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-education__alignment">
        <div className="about-section-education__background">
          <div className="about-section-education__background-image" />
        </div>
        <div className="about-section-education__content-background">
          <div className="about-section-education__container">
            <div
              className="about-section-education__heading"
              id="about-education-section-scroll"
            >
              <TypographyStyleTextPattern
                text={[
                  { 1: "E", 2: "d", 3: "u", 4: "c" },
                  { 1: "a", 2: "t", 3: "i", 4: "o" },
                  { 1: "n", 2: "", 3: "", 4: "" },
                ]}
              />
            </div>
            <div className="about-section-education__content">
              <div className="about-section-education__content-wrapper">
                <LineCardLeftComponent
                  year1={"2019"}
                  year2={"Onwards"}
                  heading={"Bahria University"}
                  number={"01"}
                  skill={"Bachelor of Computer Science"}
                  text={
                    "Pursuing Bachelors in Computer Science from a prestigious Bahria University which is expected to complete in 2023."
                  }
                />
                <LineCardRightComponent
                  year1={"2019"}
                  year2={"Onwards"}
                  heading={"PIAIC"}
                  number={"02"}
                  skill={"Blockchain and Cloud Native Computing"}
                  text={
                    "Studying Blockchain and Cloud Technologies From Presidential Initiative for Artificial Intelligence and Computing."
                  }
                />
                <LineCardLeftComponent
                  year1={"2019"}
                  year2={"2020"}
                  heading={"Aptech Computer Institute"}
                  number={"02"}
                  skill={"Diploma in Information Systems Management (DISM)"}
                  text={
                    "Learned about Front-end and Backend Technologies and Some programming Languages."
                  }
                />
                <LineCardRightComponent
                  year1={"2017"}
                  year2={"2019"}
                  heading={"Bahria College Karsaz"}
                  number={"03"}
                  skill={"Intermediate (Pre-Engineering)"}
                  text={
                    "Done my Intermediate with Chemistry, Physics and Maths as major subjects from Bahria College Karsaz."
                  }
                />
                <LineCardLeftComponent
                  year1={"2015"}
                  year2={"2013"}
                  heading={"Azeemi Public School"}
                  number={"01"}
                  skill={"Matriculation (Computer Science)"}
                  text={
                    "Done my Matriculation with Chemistry, Physics, Maths and Computer Science as major subjects."
                  }
                />
                <LineCardRightComponent
                  year1={"2005"}
                  year2={"2015"}
                  heading={"Azeemi Public School"}
                  number={"01"}
                  skill={"High School (Science)"}
                  text={
                    "Studied Chemistry, Mathematics, Physics, Social Sciences and Arabic, Sindhi, Urdu and English Languages"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
