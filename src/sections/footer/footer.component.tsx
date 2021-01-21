import { ButtonBase, Card, CardContent } from "@material-ui/core";
import {
  FooterAlignmentStyles,
  FooterContentAlignmentStyles,
  FooterContentContainerStyles,
  FooterContentHeadingStyles,
  FooterContentParaStyles,
  FooterContentIndividualStyles,
} from "./footer.styles";
import Marker from "../../assets/marker.png";
import Call from "../../assets/call.png";
import Email from "../../assets/email.png";
import Flip from "react-reveal/Flip";

export default function FooterSection() {
  return (
    <FooterAlignmentStyles>
      <FooterContentAlignmentStyles>
        <FooterContentContainerStyles>
          <FooterContentIndividualStyles>
            <Flip left>
              <ButtonBase>
                <Card className="footer-content-alignment">
                  <CardContent>
                    <img src={Marker} alt="location" />
                    <FooterContentHeadingStyles>
                      Location
                    </FooterContentHeadingStyles>
                    <FooterContentParaStyles>
                      Karachi, Sindh Pakistan
                    </FooterContentParaStyles>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Flip>
          </FooterContentIndividualStyles>
          <FooterContentIndividualStyles>
            <Flip top>
              <ButtonBase>
                <Card className="footer-content-alignment">
                  <CardContent>
                    <img src={Call} alt="location" />
                    <FooterContentHeadingStyles>
                      Call Us
                    </FooterContentHeadingStyles>
                    <FooterContentParaStyles>
                      +92-xxx-xxxxxxx
                    </FooterContentParaStyles>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Flip>
          </FooterContentIndividualStyles>
          <FooterContentIndividualStyles>
            <Flip right>
              <ButtonBase>
                <Card className="footer-content-alignment">
                  <CardContent>
                    <img src={Email} alt="location" />
                    <FooterContentHeadingStyles>
                      Email Us
                    </FooterContentHeadingStyles>
                    <FooterContentParaStyles>
                      farasataliazeemi1@gmail.com
                    </FooterContentParaStyles>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Flip>
          </FooterContentIndividualStyles>
        </FooterContentContainerStyles>
      </FooterContentAlignmentStyles>
    </FooterAlignmentStyles>
  );
}
