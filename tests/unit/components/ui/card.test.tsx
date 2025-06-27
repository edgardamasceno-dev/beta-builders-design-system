import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../../src/components/ui/card";

describe("Card", () => {
  it("renders card with content", () => {
    const { container } = render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardContent>Content</CardContent>
      </Card>,
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom-class">Test</Card>);

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
