import { shallow } from "enzyme";
import { LineCardLeftComponent } from "./line-cards.component";

describe("Logo Component Shallow Render", () => {
  const shallowRender = shallow(<LineCardLeftComponent year='2019' />);
  it("should find className line-cards-item__round", () => {
    expect(shallowRender.find(".line-cards-item__round").length).toBe(1);
  });
});
