import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import {
  LineCardLeftComponent,
  LineCardRightComponent,
} from "../../components/line-cards/line-cards.component";
import {
  EducationSectionAlignmentStyles,
  EducationSectionBackgroundImageStyles,
  EducationSectionBackgroundStyles,
  EducationSectionContainerBackgroundStyles,
  EducationSectionContainerStyles,
  EducationSectionContentLineStyles,
  EducationSectionContentStyles,
  EducationSectionHeadingStyles,
} from "./education.styles";

export default function AboutSection() {
  return (
    <EducationSectionAlignmentStyles>
      <EducationSectionBackgroundStyles>
        <EducationSectionBackgroundImageStyles />
      </EducationSectionBackgroundStyles>
      <EducationSectionContainerBackgroundStyles>
        <EducationSectionContainerStyles>
          <EducationSectionHeadingStyles id="about-education-section-scroll">
            <TypographyStyleTextPattern
              text={[
                { 1: "E", 2: "d", 3: "u", 4: "c" },
                { 1: "a", 2: "t", 3: "i", 4: "o" },
                { 1: "n", 2: "", 3: "", 4: "" },
              ]}
            />
          </EducationSectionHeadingStyles>
          <EducationSectionContentLineStyles />
          <EducationSectionContentStyles>
            <LineCardLeftComponent
              color="#ffae00"
              year1={"2019"}
              year2={"Onwards"}
              heading={"Bahria University"}
              number={"01"}
              skill={"Bachelor of Computer Science"}
              text={
                "Pursuing Bachelors in Computer Science from a prestigious Bahria University which is expected to complete in 2023."
              }
            />
            <LineCardRightComponent
              color="#ffe600"
              year1={"2019"}
              year2={"Onwards"}
              heading={"PIAIC"}
              number={"02"}
              skill={"Blockchain and Cloud Native Computing"}
              text={
                "Studying Blockchain and Cloud Technologies From Presidential Initiative for Artificial Intelligence and Computing."
              }
            />
            <LineCardLeftComponent
              color="#73ff00"
              year1={"2019"}
              year2={"2020"}
              heading={"Aptech Computer Institute"}
              number={"03"}
              skill={"Diploma in Information Systems Management (DISM)"}
              text={
                "Learned about Front-end and Backend Technologies and Some programming Languages."
              }
            />
            <LineCardRightComponent
              color="#0066ff"
              year1={"2017"}
              year2={"2019"}
              heading={"Bahria College Karsaz"}
              number={"04"}
              skill={"Intermediate (Pre-Engineering)"}
              text={
                "Done my Intermediate with Chemistry, Physics and Maths as major subjects from Bahria College Karsaz."
              }
            />
            <LineCardLeftComponent
              color="#c300ff"
              year1={"2015"}
              year2={"2013"}
              heading={"Azeemi Public School"}
              number={"05"}
              skill={"Matriculation (Computer Science)"}
              text={
                "Done my Matriculation with Chemistry, Physics, Maths and Computer Science as major subjects."
              }
            />
            <LineCardRightComponent
              color="#ff009d"
              year1={"2005"}
              year2={"2015"}
              heading={"Azeemi Public School"}
              number={"06"}
              skill={"High School (Science)"}
              text={
                "Studied Chemistry, Mathematics, Physics, Social Sciences and Arabic, Sindhi, Urdu and English Languages"
              }
            />
          </EducationSectionContentStyles>
        </EducationSectionContainerStyles>
      </EducationSectionContainerBackgroundStyles>
    </EducationSectionAlignmentStyles>
  );
}
