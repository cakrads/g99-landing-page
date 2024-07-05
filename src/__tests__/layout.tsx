import { render } from "@testing-library/react";

import RootLayout from "@/app/layout";

describe("RootLayout", () => {
  test("renders the correct HTML structure", () => {
    const expectedChilren = "Test Content";
    const { container, getByText } = render(<RootLayout>{expectedChilren}</RootLayout>);

    expect(container.querySelector("html")).toBeInTheDocument();
    expect(container.querySelector("body")).toBeInTheDocument();
    expect(getByText(expectedChilren)).toBeInTheDocument();
  });

});