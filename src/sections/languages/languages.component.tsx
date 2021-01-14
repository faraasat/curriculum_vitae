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
import Roll from "react-reveal/Roll";

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
            <Roll top>
              <CircularProgressBar
                color={`rgb(255, 208, 0)`}
                text="Urdu"
                percent={95}
              />
            </Roll>
            <Roll bottom>
              <LanguageSectionContentParaStyles>
                Native Language! Can Read and Write.
              </LanguageSectionContentParaStyles>
            </Roll>
          </LanguageSectionContentContainerStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles>
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <Roll top>
                <CircularProgressBar
                  color={`rgb(0, 132, 255)`}
                  text="English"
                  percent={75}
                />
              </Roll>
              <Roll bottom>
                <LanguageSectionContentParaStyles>
                  Second Language! Can Read and Write.
                </LanguageSectionContentParaStyles>
              </Roll>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles>
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <Roll top>
                <CircularProgressBar
                  color={`rgb(0, 225, 85)`}
                  text="Hindi"
                  percent={60}
                />
              </Roll>
              <Roll bottom>
                <LanguageSectionContentParaStyles>
                  Close to Native Language! Can Speak Fluently.
                </LanguageSectionContentParaStyles>
              </Roll>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles className="languages-section-content__1">
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <Roll top>
                <CircularProgressBar
                  color={`rgb(183, 0, 255)`}
                  text="Japanese"
                  percent={20}
                />
              </Roll>
              <Roll bottom>
                <LanguageSectionContentParaStyles>
                  Used to watch Japanese Animes! Learning Japanese.
                </LanguageSectionContentParaStyles>
              </Roll>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>

        <LanguageSectionContentStyles className="languages-section-content__2">
          <LanguageSectionContentStyles>
            <LanguageSectionContentContainerStyles>
              <Roll top>
                <CircularProgressBar
                  color={`rgb(255, 0, 128)`}
                  text="Mandarin"
                  percent={10}
                />
              </Roll>
              <Roll bottom>
                <LanguageSectionContentParaStyles>
                  Very hard to learn! Learning in progress.
                </LanguageSectionContentParaStyles>
              </Roll>
            </LanguageSectionContentContainerStyles>
          </LanguageSectionContentStyles>
        </LanguageSectionContentStyles>
      </LanguageSectionContainerStyles>
    </LanguageSectionAlignmentStyles>
  );
}
