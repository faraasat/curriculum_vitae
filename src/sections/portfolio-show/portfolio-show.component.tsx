import HoverScrollComponent from "../../components/hover-scroll/hover-scroll.component";
import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import {
  PortfolioShowAlignmentStyles,
  PortfolioShowTypoStyles,
  PortfolioShowContainerStyles,
  PortfolioShowImgStyles,
  PortfolioShowImgAlignmentStyles,
  PortfolioShowBtnStyles,
  PortfolioShowBtnContainer,
} from "./portfolio-show.styles";
import Covid from "../../assets/covid.png";
import Copy from "../../assets/copy.png";
import Natours from "../../assets/natours.png";
import AppsIcon from "@material-ui/icons/Apps";
import Flip from "react-reveal/Flip";

const PortfolioShowComponent = () => {
  return (
    <PortfolioShowAlignmentStyles>
      <PortfolioShowImgAlignmentStyles>
        <PortfolioShowImgStyles />
      </PortfolioShowImgAlignmentStyles>
      <PortfolioShowTypoStyles>
        <TypographyStyleTextPattern
          text={[
            { 1: "P", 2: "r", 3: "o", 4: "j" },
            { 1: "e", 2: "c", 3: "t", 4: "s" },
          ]}
        />
        <b>🎨</b>
      </PortfolioShowTypoStyles>
      <PortfolioShowContainerStyles>
        <Flip left>
          <HoverScrollComponent
            heading={"Covid App"}
            para={
              "This is a React App built using Material-UI, charts and React-Hooks. It is open source and you can view the code at github. This App can show infection, confirmation, active case and death rate of majority of the countries!"
            }
            Img={Covid}
            url={"https://github.com/faraasat/covid-tracker-app"}
          />
        </Flip>
        <Flip top>
          <HoverScrollComponent
            heading={"Cortex Clone"}
            para={
              "This is a React App built using Material-UI, React-Hooks and Web animations. It is open source and you can view the code at github. It is basically a clone of Cortex Copywriter website which is here cloned in React."
            }
            Img={Copy}
            url={"https://github.com/faraasat/tiny-small-animation"}
          />
        </Flip>
        <Flip right>
          <HoverScrollComponent
            heading={"Natours"}
            para={
              "This is a pure CSS/SCSS project in which we have created a basic tour website including animations. It is open source and you can view the code at github. In this project no Javascript is used."
            }
            Img={Natours}
            url={"https://github.com/faraasat/tour-css"}
          />
        </Flip>
      </PortfolioShowContainerStyles>
      <PortfolioShowBtnContainer>
        <Flip bottom>
          <PortfolioShowBtnStyles
            href="https://github.com/faraasat?tab=repositories"
            target="_new"
          >
            See Other Projects{" "}
            <span>
              <AppsIcon />
            </span>
          </PortfolioShowBtnStyles>
        </Flip>
      </PortfolioShowBtnContainer>
    </PortfolioShowAlignmentStyles>
  );
};

export default PortfolioShowComponent;
