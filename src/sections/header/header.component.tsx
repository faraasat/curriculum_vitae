import "./header.styles.css";
import ProfileImg from "../../assets/profile-image.png";
import LogoComponent from "../../components/logo/logo.component";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import HeaderIconStyledComponent from "../../components/header-icon-styled/header-icon-styled.component";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function AboutSection() {
  const scrollToAbout = () => {
    const section = document.querySelector("#about-education-section-scroll");
    section!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="cv-header">
      <div className="cv-header__image">
        <LogoComponent
          src={ProfileImg}
          alt={"Profile - Farasat Ali"}
          draggable={"false"}
        />
      </div>

      <div className="cv-header__icons">
        <hr />
        <HeaderIconStyledComponent
          onClick={scrollToAbout}
          Icon={EqualizerIcon}
          color={"rgba(255, 0, 0, 0.65)"}
          text={"About"}
        />
        <hr />
        <HeaderIconStyledComponent
          Icon={LocalMallIcon}
          color={"rgba(0, 81, 255, 0.65)"}
          text={"Portfolio"}
        />
        <hr />
        <HeaderIconStyledComponent
          Icon={SpeakerNotesIcon}
          color={"rgba(255, 123, 0, 0.65)"}
          text={"Testimonial"}
        />
        <hr />
        <HeaderIconStyledComponent
          Icon={ContactSupportIcon}
          color={"rgba(0, 255, 34, 0.65)"}
          text={"Contact"}
        />
        <hr />
      </div>

      <div className="cv-header__social">
        <div className="cv-header__social-text">
          <p>Follow Us</p>
        </div>
      </div>
      <div className="cv-header__social-icons">
        <a
          id="cv-header__social-icons__facebook"
          href="https://facebook.com/FarasatAliAzeemi/"
          target="_new"
        >
          <FacebookIcon />
        </a>
        <a
          id="cv-header__social-icons__linked-in"
          href="https://www.linkedin.com/in/faraasat/"
          target="_new"
        >
          <LinkedInIcon />
        </a>
        <br />
        <a
          id="cv-header__social-icons__instagram"
          href="https://www.instagram.com/farasat_ali_azeemi/"
          target="_new"
        >
          <InstagramIcon />
        </a>
        <a
          id="cv-header__social-icons__github"
          href="https://github.com/faraasat"
          target="_new"
        >
          <GitHubIcon />
        </a>
        <br />
        <a
          id="cv-header__social-icons__telegram"
          href="https://t.me/farasat_azeemi/"
          target="_new"
        >
          <TelegramIcon />
        </a>
        <a
          id="cv-header__social-icons__whatsApp"
          href="https://wa.link/7xeqob"
          target="_new"
        >
          <WhatsAppIcon />
        </a>
        <br />
        <a id="cv-header__social-icons__twitter" href="#!" target="_new">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}
