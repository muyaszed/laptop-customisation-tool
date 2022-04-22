import renderer from "react-test-renderer";
import { Content } from "../../components";

describe("Home page", () => {
  test("render the page correctly by default", () => {
    const wrapper = renderer.create(<Content />);
    expect(wrapper).toMatchSnapshot();
  });
});
