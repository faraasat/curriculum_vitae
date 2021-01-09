import { shallow } from "enzyme";
import { TypographyStyle1 } from "./typography.component";

describe("Logo Component Shallow Render", () => {
  const shallowRender = shallow(<TypographyStyle1 text={"abbc"} />);
  it("should find className typography-text-styling", () => {
    expect(shallowRender.find(".typography-text-styling").length).toBe(1);
  });
});
