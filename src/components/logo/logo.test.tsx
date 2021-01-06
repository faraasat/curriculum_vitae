import { shallow } from "enzyme";
import LogoComponent from "./logo.component";

describe("Logo Component Shallow Render", () => {
  const mockParams = {
    src: "https://picsum.photos/200",
    alt: "Random Image",
    draggable: true,
  };

  const shallowRender = shallow(<LogoComponent {...mockParams} />);
  it("should find className cv-header__image-background", () => {
    expect(shallowRender.find(".cv-header__image-background").length).toBe(1);
  });
});
