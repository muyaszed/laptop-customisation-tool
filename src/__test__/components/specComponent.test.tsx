import { render, screen } from "@testing-library/react";
import { SpecComponent } from "../../components";

describe("OptionItem component", () => {
  const mockedProps = {
    componentId: "1",
    title: "this is a title",
    options: [
      {
        id: "1",
        name: "Option 1",
        price: "£200",
        selected: true,
      },
      {
        id: "2",
        name: "Option 2",
        price: "£400",
        selected: false,
      },
    ],
    handleOptionClick: jest.fn(),
    handleOptionKeyDown: jest.fn(),
  };
  test("render title", () => {
    render(<SpecComponent {...mockedProps} />);
    expect(screen.getByText(mockedProps.title)).toBeDefined();
  });
  test("render option list", () => {
    render(<SpecComponent {...mockedProps} />);
    const list = screen.getByTestId(`${mockedProps.title}-spec-list`);
    expect(list.children.length).toBe(mockedProps.options.length);
  });
});
