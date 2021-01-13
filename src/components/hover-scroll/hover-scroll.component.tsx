import { ButtonBase, Card, CardContent } from "@material-ui/core";
import {
  HoverScrollAlignmentStyles,
  HoverScrollBox1Styles,
  HoverScrollFooterStyles,
  HoverScrollBtnStyles,
  HoverScrollInfoStyles,
  HoverScrollScreenStyles,
} from "./hover-scroll.styles";
import InfoIcon from "@material-ui/icons/Info";
import { useState } from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IHoverScroll } from "../../types/cv";

const HoverScrollComponent: React.FC<IHoverScroll> = ({
  para,
  heading,
  Img,
  url,
}) => {
  const [iconState, setIconState] = useState<boolean>(false);

  const handleIconState = () => {
    setIconState(!iconState);
  };

  return (
    <HoverScrollAlignmentStyles>
      <ButtonBase>
        <Card style={{ padding: "0 !important", margin: "0" }}>
          <HoverScrollScreenStyles iconState={iconState}>
            <span>😊</span>
            <p>{para}</p>
          </HoverScrollScreenStyles>
          <HoverScrollInfoStyles
            onClick={handleIconState}
            iconState={iconState}
          >
            {iconState ? (
              <FontAwesomeIcon icon={faExclamationCircle} />
            ) : (
              <InfoIcon />
            )}
          </HoverScrollInfoStyles>
          <CardContent style={{ padding: 0, margin: 0, height: 406 }}>
            <HoverScrollBox1Styles Img={Img} />
            <HoverScrollFooterStyles>
              <p>{heading}</p>
              <HoverScrollBtnStyles href={url} target="_new">
                Check Out <span>👉</span>
              </HoverScrollBtnStyles>
            </HoverScrollFooterStyles>
          </CardContent>
        </Card>
      </ButtonBase>
    </HoverScrollAlignmentStyles>
  );
};

export default HoverScrollComponent;
