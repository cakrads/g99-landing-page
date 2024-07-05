import { render } from "@testing-library/react";

import Home from "@/app/page";

describe("Home", () => {
  test("renders the component without errors", () => {
    render(<Home />);
  });

  test("displays the correct text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Get started by editing")).toBeInTheDocument();
  });

});