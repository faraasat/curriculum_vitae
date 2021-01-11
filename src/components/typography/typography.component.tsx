import { ITypographyStyle, ITypographyStyleTextPattern } from "../../types/cv";
import cuid from "cuid";
import {
  TypographyTextStyling1,
  TypographyTextStyling2,
  TypographyTextStyling3,
  TypographyTextStyling4,
} from "./typography.styles";

export const TypographyStyle1: React.FC<ITypographyStyle> = ({ text }) => {
  return <TypographyTextStyling1>{text}</TypographyTextStyling1>;
};

export const TypographyStyle2: React.FC<ITypographyStyle> = ({ text }) => {
  return <TypographyTextStyling2>{text}</TypographyTextStyling2>;
};

export const TypographyStyle3: React.FC<ITypographyStyle> = ({ text }) => {
  return <TypographyTextStyling3>{text}</TypographyTextStyling3>;
};

export const TypographyStyle4: React.FC<ITypographyStyle> = ({ text }) => {
  return <TypographyTextStyling4>{text}</TypographyTextStyling4>;
};

export const TypographyStyleTextPattern: React.FC<ITypographyStyleTextPattern> = ({
  text,
}) => {
  return (
    <>
      {text.map((txt) => {
        return (
          <span key={cuid()}>
            <TypographyStyle1 text={txt[1]} />
            {txt[2] ? <TypographyStyle2 text={txt[2]} /> : null}
            {txt[3] ? <TypographyStyle3 text={txt[3]} /> : null}
            {txt[4] ? <TypographyStyle4 text={txt[4]} /> : null}
          </span>
        );
      })}
    </>
  );
};
