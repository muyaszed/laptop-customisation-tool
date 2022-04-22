import { fireEvent, render, screen } from "@testing-library/react";
import { OptionItem } from "../../components";

describe("OptionItem component", () => {
  const mockedProps = {
    componentId: "1",
    option: {
      id: "2",
      name: "Option Name",
      price: "£300",
      selected: true,
    },
    handleOptionClick: jest.fn(),
    handleOptionKeyDown: jest.fn(),
  };
  test("render name", () => {
    render(<OptionItem {...mockedProps} />);
    expect(screen.getByText(mockedProps.option.name)).toBeDefined();
  });
  test("render price", () => {
    render(<OptionItem {...mockedProps} />);
    expect(screen.getByText(mockedProps.option.name)).toBeDefined();
  });
  test("apply correct css", () => {
    render(<OptionItem {...mockedProps} />);
    expect(
      screen
        .getByText(mockedProps.option.name)
        .parentElement?.parentElement?.className.includes("selected")
    ).toBeTruthy;
  });
  test("invoke correct function when click", () => {
    render(<OptionItem {...mockedProps} />);
    const clickableElement = screen.getByText(mockedProps.option.name);

    fireEvent.click(clickableElement);

    expect(mockedProps.handleOptionClick).toBeCalled;
    expect(mockedProps.handleOptionClick).toBeCalledWith("1", "2");
  });

  describe("Keyboard interaction", () => {
    describe("when space bar is pressed", () => {
      test("invoke correct function", () => {
        render(<OptionItem {...mockedProps} />);
        const clickableElement = screen.getByText(mockedProps.option.name);

        clickableElement.focus();
        fireEvent.keyDown(clickableElement, { key: " " });

        expect(mockedProps.handleOptionKeyDown).toBeCalled;
        expect(mockedProps.handleOptionKeyDown).toBeCalledWith("1", "2");
      });
    });

    describe("when other than space bar is pressed", () => {
      test("will not invoke function", () => {
        render(<OptionItem {...mockedProps} />);
        const clickableElement = screen.getByText(mockedProps.option.name);

        clickableElement.focus();
        fireEvent.keyDown(clickableElement, { key: "Enter" });

        expect(mockedProps.handleOptionKeyDown).not.toBeCalled;

        fireEvent.keyDown(clickableElement, { key: "a" });

        expect(mockedProps.handleOptionKeyDown).not.toBeCalled;

        fireEvent.keyDown(clickableElement, { key: "b" });

        expect(mockedProps.handleOptionKeyDown).not.toBeCalled;

        fireEvent.keyDown(clickableElement, { key: "b" });

        expect(mockedProps.handleOptionKeyDown).not.toBeCalled;
      });
    });
  });
});
