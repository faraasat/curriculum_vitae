import { shallow } from "enzyme";
import EducationSection from "./languages.component";

describe("Education Section Shallow Render", () => {
  const shallowRender = shallow(<EducationSection />);
  it("should find more than 1 div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
