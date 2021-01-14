import ProfileImg from "../../assets/profile-image.png";
import LogoComponent from "../../components/logo/logo.component";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SchoolIcon from "@material-ui/icons/School";
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
import {
  CvHeaderIconsStyles,
  CvHeaderImageStyles,
  CvHeaderSocialIconFacebookStyles,
  CvHeaderSocialIconInstagramStyles,
  CvHeaderSocialIconLinkedInStyles,
  CvHeaderSocialIconsStyles,
  CvHeaderSocialIconTelegramStyles,
  CvHeaderSocialIconTwitterStyles,
  CvHeaderSocialIconWhatsAppStyles,
  CvHeaderSocialStyles,
  CvHeaderSocialTextStyles,
  CvHeaderStyles,
  CvHeaderSocialIconGitHubStyles,
} from "./header.styles";

export default function AboutSection() {
  const scrollToAbout = () => {
    const section = document.querySelector("#about-section-scroll");
    section!.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEducation = () => {
    const section = document.querySelector("#education-section-scroll");
    section!.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    const section = document.querySelector("#portfolio-section-scroll");
    section!.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.querySelector("#contact-section-scroll");
    section!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CvHeaderStyles>
      <CvHeaderImageStyles>
        <LogoComponent
          src={ProfileImg}
          alt={"Profile - Farasat Ali"}
          draggable={"false"}
        />
      </CvHeaderImageStyles>

      <CvHeaderIconsStyles>
        <hr />
        <HeaderIconStyledComponent
          onClick={scrollToAbout}
          Icon={EqualizerIcon}
          color={"rgba(255, 0, 212, 0.65)"}
          text={"About"}
        />
        <hr />
        <HeaderIconStyledComponent
          onClick={scrollToEducation}
          Icon={SchoolIcon}
          color={"rgba(0, 81, 255, 0.65)"}
          text={"Education"}
        />
        <hr />
        <HeaderIconStyledComponent
          onClick={scrollToPortfolio}
          Icon={SpeakerNotesIcon}
          color={"rgba(255, 123, 0, 0.65)"}
          text={"Portfolio"}
        />
        <hr />
        <HeaderIconStyledComponent
          onClick={scrollToContact}
          Icon={ContactSupportIcon}
          color={"rgba(0, 255, 34, 0.65)"}
          text={"Contact"}
        />
        <hr />
      </CvHeaderIconsStyles>

      <CvHeaderSocialStyles>
        <CvHeaderSocialTextStyles>
          <p>Follow Us</p>
        </CvHeaderSocialTextStyles>
      </CvHeaderSocialStyles>
      <CvHeaderSocialIconsStyles>
        <CvHeaderSocialIconFacebookStyles
          href="https://facebook.com/FarasatAliAzeemi/"
          target="_new"
        >
          <FacebookIcon />
        </CvHeaderSocialIconFacebookStyles>
        <CvHeaderSocialIconLinkedInStyles
          href="https://www.linkedin.com/in/faraasat/"
          target="_new"
        >
          <LinkedInIcon />
        </CvHeaderSocialIconLinkedInStyles>
        <br />
        <CvHeaderSocialIconInstagramStyles
          href="https://www.instagram.com/farasat_ali_azeemi/"
          target="_new"
        >
          <InstagramIcon />
        </CvHeaderSocialIconInstagramStyles>
        <CvHeaderSocialIconGitHubStyles
          href="https://github.com/faraasat"
          target="_new"
        >
          <GitHubIcon />
        </CvHeaderSocialIconGitHubStyles>
        <br />
        <CvHeaderSocialIconTelegramStyles
          href="https://t.me/farasat_azeemi/"
          target="_new"
        >
          <TelegramIcon />
        </CvHeaderSocialIconTelegramStyles>
        <CvHeaderSocialIconWhatsAppStyles
          href="https://wa.link/7xeqob"
          target="_new"
        >
          <WhatsAppIcon />
        </CvHeaderSocialIconWhatsAppStyles>
        <br />
        <CvHeaderSocialIconTwitterStyles href="#!" target="_new">
          <TwitterIcon />
        </CvHeaderSocialIconTwitterStyles>
      </CvHeaderSocialIconsStyles>
    </CvHeaderStyles>
  );
}
