import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

describe("/", () => {
  it("renders a conduit", () => {
    render(<Home />);

    const conduitText = screen.getByText("conduit");

    expect(conduitText).toBeInTheDocument();
  });
});
