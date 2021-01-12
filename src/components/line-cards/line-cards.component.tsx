import { ILineCard } from "../../types/cv";
import {
  LineCardItemsLeftStyles,
  LineCardItemsRightStyles,
  LineCardItemsLeftRoundYearStyles,
  LineCardItemsRightRoundYearStyles,
  LineCardItemsLeftBoxInfoStyles,
  LineCardItemsLeftBoxParaStyles,
  LineCardItemsLeftBoxStyles,
  LineCardItemsLeftBoxTagBoxStyles,
  LineCardItemsLeftBoxTagLeftTitleStyles,
  LineCardItemsLeftBoxTagRightTitleStyles,
  LineCardItemsLeftBoxTagStyles,
  LineCardItemsRightBoxInfoStyles,
  LineCardItemsRightBoxParaStyles,
  LineCardItemsRightBoxStyles,
  LineCardItemsRightBoxTagBoxStyles,
  LineCardItemsRightBoxTagLeftTitleStyles,
  LineCardItemsRightBoxTagRightTitleStyles,
  LineCardItemsRightBoxTagStyles,
} from "./line-cards.styles";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export const LineCardLeftComponent: React.FC<ILineCard> = ({
  year1,
  year2,
  number,
  heading,
  skill,
  text,
  color,
}) => {
  return (
    <LineCardItemsLeftStyles>
      <Fade left>
        <LineCardItemsLeftRoundYearStyles color={color}>
          <h1>
            <span>
              {year1}
              <br />
              to
              <br />
              {year2}
            </span>
          </h1>
        </LineCardItemsLeftRoundYearStyles>
      </Fade>
      <Fade right>
        <LineCardItemsLeftBoxStyles>
          <LineCardItemsLeftBoxTagStyles>
            <LineCardItemsLeftBoxTagBoxStyles>
              <LineCardItemsLeftBoxTagLeftTitleStyles>
                <h1>{number}</h1>
              </LineCardItemsLeftBoxTagLeftTitleStyles>
              <LineCardItemsLeftBoxTagRightTitleStyles color={color}>
                <h1>{heading}</h1>
              </LineCardItemsLeftBoxTagRightTitleStyles>
            </LineCardItemsLeftBoxTagBoxStyles>
          </LineCardItemsLeftBoxTagStyles>
          <LineCardItemsLeftBoxInfoStyles color={color}>
            {skill}
          </LineCardItemsLeftBoxInfoStyles>
          <LineCardItemsLeftBoxParaStyles>
            {text}
          </LineCardItemsLeftBoxParaStyles>
        </LineCardItemsLeftBoxStyles>
      </Fade>
    </LineCardItemsLeftStyles>
  );
};

export const LineCardRightComponent: React.FC<ILineCard> = ({
  year1,
  year2,
  number,
  heading,
  skill,
  text,
  color,
}) => {
  return (
    <LineCardItemsRightStyles>
      <Zoom left>
        <LineCardItemsRightBoxStyles>
          <LineCardItemsRightBoxTagStyles>
            <LineCardItemsRightBoxTagBoxStyles>
              <LineCardItemsRightBoxTagRightTitleStyles color={color}>
                <h1>{heading}</h1>
              </LineCardItemsRightBoxTagRightTitleStyles>
              <LineCardItemsRightBoxTagLeftTitleStyles>
                <h1>{number}</h1>
              </LineCardItemsRightBoxTagLeftTitleStyles>
            </LineCardItemsRightBoxTagBoxStyles>
          </LineCardItemsRightBoxTagStyles>
          <LineCardItemsRightBoxInfoStyles color={color}>
            {skill}
          </LineCardItemsRightBoxInfoStyles>
          <LineCardItemsRightBoxParaStyles>
            {text}
          </LineCardItemsRightBoxParaStyles>
        </LineCardItemsRightBoxStyles>
      </Zoom>
      <Zoom right>
        <LineCardItemsRightRoundYearStyles color={color}>
          <h1>
            <span>
              {year1}
              <br />
              to
              <br />
              {year2}
            </span>
          </h1>
        </LineCardItemsRightRoundYearStyles>
      </Zoom>
    </LineCardItemsRightStyles>
  );
};
