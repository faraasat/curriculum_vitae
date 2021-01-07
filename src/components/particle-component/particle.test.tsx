import { shallow } from "enzyme";
import ParticlesComponent from "./particle.component";

describe("Particle Component Shallow Render", () => {
  const shallowRender = shallow(<ParticlesComponent />);

  it("should have id tsparticles", () => {
    expect(shallowRender.find("#tsparticles").length).toEqual(1);
  });
});
