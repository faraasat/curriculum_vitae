import ContactFormComponent from "../../components/contact-form/contact-form.component";
import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import {
  ContactSectionAlignmentStyles,
  ContactSectionBackgroundImageStyles,
  ContactSectionBackgroundStyles,
  ContactSectionHeadingStyles,
  ContactSectionTypoContainerStyles,
  ContactSectionContactFormStyles,
  ContactSectionBackground2Styles,
  ContactSectionImgBackgroundStyles,
  ContactSectionImgStyles,
} from "./contact.styles";

export default function AboutSection() {
  return (
    <ContactSectionAlignmentStyles>
      <ContactSectionImgBackgroundStyles>
        <ContactSectionImgStyles />
      </ContactSectionImgBackgroundStyles>
      <ContactSectionTypoContainerStyles>
        <ContactSectionHeadingStyles id="contact-section-scroll">
          <TypographyStyleTextPattern
            text={[
              { 1: "C", 2: "o", 3: "n", 4: "t" },
              { 1: "a", 2: "c", 3: "t", 4: "-" },
              { 1: "U", 2: "s", 3: "", 4: "" },
            ]}
          />
          <b>📲</b>
        </ContactSectionHeadingStyles>
      </ContactSectionTypoContainerStyles>
      <ContactSectionBackgroundStyles>
        <ContactSectionContactFormStyles>
          <ContactFormComponent />
        </ContactSectionContactFormStyles>
        <ContactSectionBackground2Styles>
          <ContactSectionBackgroundImageStyles
            backgroundColor="transparent"
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
            containerClassName="map"
            map={"world_mill"}
            zoomOnScroll={true}
            zoomButtons={true}
            regionStyle={{
              initial: {
                fill: "rgb(255, 255, 255)",
                "fill-opacity": 1,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0,
              },
              hover: {
                "fill-opacity": 1,
                fill: "#99ff99",
                cursor: "pointer",
              },
              selected: {
                fill: "#ff0000",
              },
            }}
            markers={{
              PK: { latLng: [24.8607, 67.0011], name: "Karachi" },
            }}
            normalizeFunction={"polynomial"}
            markerStyle={{
              initial: {
                r: 6,
                fill: "#727cf5",
                "fill-opacity": 0.9,
                stroke: "#fff",
                "stroke-width": 6,
                "stroke-opacity": 0.6,
              },
              hover: {
                stroke: "#fff",
                "fill-opacity": 1,
                "stroke-width": 1.5,
              },
            }}
          />
        </ContactSectionBackground2Styles>
      </ContactSectionBackgroundStyles>
    </ContactSectionAlignmentStyles>
  );
}
