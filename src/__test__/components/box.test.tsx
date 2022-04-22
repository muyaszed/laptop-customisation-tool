import { render, screen } from "@testing-library/react";
import { Box } from "../../components";

describe("Box component", () => {
  const mockedProps = {
    header: "This is the header",
    containerClassName: "class-name",
    dataTestId: "test-id",
  };
  test("render header", () => {
    render(
      <Box {...mockedProps}>
        <div>Hello world</div>
      </Box>
    );
    expect(screen.getByText(mockedProps.header)).toBeDefined();
  });
  test("apply correct class name", () => {
    render(
      <Box {...mockedProps}>
        <div>Hello world</div>
      </Box>
    );
    expect(
      screen
        .getByTestId("test-id")
        .className.includes(mockedProps.containerClassName)
    ).toBeTruthy();
  });
  test("apply correct test id", () => {
    render(
      <Box {...mockedProps}>
        <div>Hello world</div>
      </Box>
    );
    expect(screen.getByTestId(mockedProps.dataTestId)).toBeDefined();
  });
});
