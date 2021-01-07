import ParticlesComponent from "../../components/particle-component/particle.component";
import "./about.styles.css";
import ItIcon from "../../assets/hero_employee.svg";
import Bg from "../../assets/bg-2.svg";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import CustomButton from "../../components/custom-button/custom-button.component";
import SendIcon from "@material-ui/icons/Send";
import GetAppIcon from "@material-ui/icons/GetApp";

export default function AboutSection() {
  return (
    <div>
      <div className="about-section-particle-alignment">
        <ParticlesComponent />
      </div>
      <div className="about-section-background">
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
      </div>
    </div>
  );
}
