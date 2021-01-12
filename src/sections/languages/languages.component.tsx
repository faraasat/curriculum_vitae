import CircularProgressBar from "../../components/circular-progress/circular-progress.component";
import { TypographyStyleTextPattern } from "../../components/typography/typography.component";
import {
  LanguageSectionAlignmentStyles,
  LanguageSectionContainerStyles,
  LanguageSectionContentStyles,
  LanguageSectionContentContainerStyles,
  LanguageSectionContentParaStyles,
  LanguageSectionTypoStyles,
} from "./languages.styles";

export default function AboutSection() {
  return (
    <LanguageSectionAlignmentStyles>
      <LanguageSectionTypoStyles>
        <TypographyStyleTextPattern
          text={[
            { 1: "L", 2: "a", 3: "n", 4: "g" },
            { 1: "u", 2: "a", 3: "g", 4: "e" },
            { 1: "s", 2: "", 3: "", 4: "" },
          ]}
        />
        <b>🌍</b>
      </LanguageSectionTypoStyles>
      <LanguageSectionContainerStyles>
        <LanguageSectionContentStyles>
          <LanguageSectionContentContainerStyles>
            <CircularProgressBar
              color={`rgb(255, 208, 0)`}
              text="Urdu"
              percent={95}
            />
            <LanguageSectionContentParaStyles>
              Native Language! Can Read and Write.
            </LanguageSectionContentParaStyles>
          </LanguageSectionContentContainerStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles>
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <CircularProgressBar
                color={`rgb(0, 132, 255)`}
                text="English"
                percent={75}
              />
              <LanguageSectionContentParaStyles>
                Second Language! Can Read and Write.
              </LanguageSectionContentParaStyles>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles>
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <CircularProgressBar
                color={`rgb(0, 225, 85)`}
                text="Hindi"
                percent={60}
              />
              <LanguageSectionContentParaStyles>
              Close to Native Language! Can Speak Fluently.
              </LanguageSectionContentParaStyles>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles className='languages-section-content__1'>
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <CircularProgressBar
                color={`rgb(183, 0, 255)`}
                text="Japanese"
                percent={20}
              />
              <LanguageSectionContentParaStyles>
                Used to watch Japanese Animes! Learning Japanese.
              </LanguageSectionContentParaStyles>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles className='languages-section-content__2'>
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <CircularProgressBar
                color={`rgb(255, 0, 128)`}
                text="Mandarin"
                percent={10}
              />
              <LanguageSectionContentParaStyles>
                Very hard to learn! Learning in progress.
              </LanguageSectionContentParaStyles>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>
      </LanguageSectionContainerStyles>
    </LanguageSectionAlignmentStyles>
  );
}
