import { shallow } from "enzyme";
import HeaderIconStyledComponent from "./header-icon-styled.component";

describe("HeaderIconStyled Component Shallow Render", () => {
  const mockParams = {
    href: "javascript",
    Icon: jest.fn(),
    color: "red",
    text: "hello",
  };

  const shallowRender = shallow(<HeaderIconStyledComponent {...mockParams} />);
  it("should find className cv-header__about-icon__icon", () => {
    expect(shallowRender.find(".cv-header__about-icon__icon").length).toBe(1);
  });
});
