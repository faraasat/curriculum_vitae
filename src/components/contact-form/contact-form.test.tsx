import { shallow } from "enzyme";
import HoverScrollComponent from "./contact-form.component";

describe("Hover Scroll Component Shallow Render", () => {
  // const mockParams = {
  //   href: "javascript",
  //   Icon: jest.fn(),
  //   color: "red",
  //   text: "hello",
  // };

  const shallowRender = shallow(<HoverScrollComponent />);
  it("should find className cv-header__about-icon__icon", () => {
    expect(shallowRender.find(".cv-header__about-icon__icon").length).toBe(1);
  });
});
