import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import { Home } from "../../pages/";

describe("Home page", () => {
  test("render the page correctly by default", () => {
    const wrapper = renderer.create(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("all the first item in each category selected by default", () => {
    test("screen", () => {
      render(<Home />);
      const screenSpecList = screen.getByTestId("screen-spec-list");
      const firstItem = screenSpecList.children[0];
      const summary = screen.getByTestId("spec-summary");

      expect(
        within(summary).getByText(firstItem.children[0].children[0].innerHTML)
      ).toBeDefined();
    });

    test("cpu", () => {
      render(<Home />);
      const screenSpecList = screen.getByTestId("cpu-spec-list");
      const firstItem = screenSpecList.children[0];
      const summary = screen.getByTestId("spec-summary");

      expect(
        within(summary).getByText(firstItem.children[0].children[0].innerHTML)
      ).toBeDefined();
    });

    test("storage", () => {
      render(<Home />);
      const screenSpecList = screen.getByTestId("storage-spec-list");
      const firstItem = screenSpecList.children[0];
      const summary = screen.getByTestId("spec-summary");

      expect(
        within(summary).getByText(firstItem.children[0].children[0].innerHTML)
      ).toBeDefined();
    });

    test("memory", () => {
      render(<Home />);
      const screenSpecList = screen.getByTestId("memory-spec-list");
      const firstItem = screenSpecList.children[0];
      const summary = screen.getByTestId("spec-summary");

      expect(
        within(summary).getByText(firstItem.children[0].children[0].innerHTML)
      ).toBeDefined();
    });
    test("graphics", () => {
      render(<Home />);
      const screenSpecList = screen.getByTestId("graphics-spec-list");
      const firstItem = screenSpecList.children[0];
      const summary = screen.getByTestId("spec-summary");

      expect(
        within(summary).getByText(firstItem.children[0].children[0].innerHTML)
      ).toBeDefined();
    });
  });

  describe("Item selected reflects the summary", () => {
    test("screen", async () => {
      render(<Home />);
      const screenSpecList = screen.getByTestId("screen-spec-list");
      const secondItem = screenSpecList.children[1].children[0];

      fireEvent.click(secondItem);
      const summary = screen.getByTestId("spec-summary");
      await waitFor(() => summary);

      expect(
        within(summary).getByText(secondItem.children[0].innerHTML)
      ).toBeDefined();
    });

    test("CPU", async () => {
      render(<Home />);
      const cpuSpecList = screen.getByTestId("cpu-spec-list");
      const secondItem = cpuSpecList.children[1].children[0];

      fireEvent.click(secondItem);
      const summary = screen.getByTestId("spec-summary");
      await waitFor(() => summary);

      expect(
        within(summary).getByText(secondItem.children[0].innerHTML)
      ).toBeDefined();
    });

    test("storage", async () => {
      render(<Home />);
      const storageSpecList = screen.getByTestId("storage-spec-list");
      const secondItem = storageSpecList.children[1].children[0];

      fireEvent.click(secondItem);
      const summary = screen.getByTestId("spec-summary");
      await waitFor(() => summary);

      expect(
        within(summary).getByText(secondItem.children[0].innerHTML)
      ).toBeDefined();
    });

    test("memory", async () => {
      render(<Home />);
      const memorySpecList = screen.getByTestId("memory-spec-list");
      const secondItem = memorySpecList.children[1].children[0];

      fireEvent.click(secondItem);
      const summary = screen.getByTestId("spec-summary");
      await waitFor(() => summary);

      expect(
        within(summary).getByText(secondItem.children[0].innerHTML)
      ).toBeDefined();
    });

    test("graphics", async () => {
      render(<Home />);
      const graphicsSpecList = screen.getByTestId("graphics-spec-list");
      const secondItem = graphicsSpecList.children[1].children[0];

      fireEvent.click(secondItem);
      const summary = screen.getByTestId("spec-summary");
      await waitFor(() => summary);

      expect(
        within(summary).getByText(secondItem.children[0].innerHTML)
      ).toBeDefined();
    });
  });
});
