import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import "./about.styles.css";

export default function AboutSection() {
  return (
    <section className="about-section-alignment">
      <div className="about-section-heading-typography">
        <TypographyStyleTextPattern
          text={[
            { 1: "A", 2: "b", 3: "o", 4: "u" },
            { 1: "t", 2: "-", 3: "M", 4: "e" },
          ]}
        />
        <b>😊</b>
      </div>
      <h1>Hello World</h1>
    </section>
  );
}
