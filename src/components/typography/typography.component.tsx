import { ITypographyStyle, ITypographyStyleTextPattern } from "../../types/cv";
import "./typography.styles.css";
import cuid from "cuid";

export const TypographyStyle1: React.FC<ITypographyStyle> = ({ text }) => {
  return (
    <div className="typography-text-styling typography-text-styling-1">
      {text}
    </div>
  );
};

export const TypographyStyle2: React.FC<ITypographyStyle> = ({ text }) => {
  return (
    <div className="typography-text-styling typography-text-styling-2">
      {text}
    </div>
  );
};

export const TypographyStyle3: React.FC<ITypographyStyle> = ({ text }) => {
  return (
    <div className="typography-text-styling typography-text-styling-3">
      {text}
    </div>
  );
};

export const TypographyStyle4: React.FC<ITypographyStyle> = ({ text }) => {
  return (
    <div className="typography-text-styling typography-text-styling-4">
      {text}
    </div>
  );
};

export const TypographyStyleTextPattern: React.FC<ITypographyStyleTextPattern> = ({
  text,
}) => {
  return (
    <div className="typography-text-styling-pattern">
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
    </div>
  );
};
