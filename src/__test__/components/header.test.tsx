import { render, screen } from "@testing-library/react";
import { Header } from "../../components";

describe("Header component", () => {
  test("render title", () => {
    const title = "this is the title";
    render(<Header title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });
});
