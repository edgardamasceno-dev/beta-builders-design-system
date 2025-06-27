import { render } from "@testing-library/react";
import { Card } from "./card";

describe("Card component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Card>
        <div>Test Child</div>
      </Card>,
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("applies additional classNames", () => {
    const { container } = render(
      <Card className="extra-class">
        <div>Test Child</div>
      </Card>,
    );
    expect(container.firstChild).toHaveClass("extra-class");
  });
});
