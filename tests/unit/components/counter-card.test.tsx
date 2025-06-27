import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CounterCard } from "../../../src/components/counter-card";

describe("CounterCard", () => {
  it("renders the title and count", () => {
    render(<CounterCard title="Total Users" count={150} />);
    
    const titleElement = screen.getByText("Total Users");
    const countElement = screen.getByText("150");
    
    expect(titleElement).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  it("renders with maxCount", () => {
    render(<CounterCard title="Occupied Desks" count={80} maxCount={100} />);
    expect(screen.getByText("/100")).toBeInTheDocument();
  });

  it("shows available slots information", () => {
    render(
      <CounterCard
        title="Team Capacity"
        count={5}
        maxCount={20}
        showSlotsInfo={true}
        slotsAvailableText="vagas restantes"
      />
    );
    expect(screen.getByText("15 vagas restantes")).toBeInTheDocument();
  });

  it("shows available slots information with default text", () => {
    render(
      <CounterCard
        title="Team Capacity"
        count={5}
        maxCount={20}
        showSlotsInfo={true}
      />
    );
    expect(screen.getByText("15 slots disponíveis")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(
      <CounterCard
        title="Projects"
        count={12}
        description="Active projects"
      />
    );
    expect(screen.getByText("Active projects")).toBeInTheDocument();
  });

  it("renders the action button", () => {
    const actionButton = <button type="button">Details</button>;
    render(
      <CounterCard title="Projects" count={12} actionButton={actionButton} />
    );
    expect(screen.getByRole("button", { name: "Details" })).toBeInTheDocument();
  });

  describe("Percentage Variant Colors", () => {
    it("applies green colors for low percentage", () => {
      const { container } = render(
        <CounterCard
          title="Progress"
          count={50}
          maxCount={100}
          variant="percentage"
        />
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass("bg-green-100");
    });

    it("applies yellow colors for medium percentage", () => {
      const { container } = render(
        <CounterCard
          title="Progress"
          count={75}
          maxCount={100}
          variant="percentage"
        />
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass("bg-yellow-100");
    });

    it("applies red colors for high percentage", () => {
      const { container } = render(
        <CounterCard
          title="Progress"
          count={95}
          maxCount={100}
          variant="percentage"
        />
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass("bg-red-100");
    });

    it("renders description with percentage variant colors", () => {
      render(
        <CounterCard
          title="Storage Usage"
          count={85}
          maxCount={100}
          variant="percentage"
          description="Server storage"
        />
      );
      expect(screen.getByText("Server storage")).toBeInTheDocument();
    });

    it("renders slots info with percentage variant colors", () => {
      render(
        <CounterCard
          title="Parking Spots"
          count={80}
          maxCount={100}
          variant="percentage"
          showSlotsInfo={true}
          slotsAvailableText="spots available"
        />
      );
      expect(screen.getByText("20 spots available")).toBeInTheDocument();
    });
  });

  describe("Default Variant", () => {
    it("renders with default variant styling", () => {
      const { container } = render(
        <CounterCard
          title="Default"
          count={50}
          maxCount={100}
          variant="default"
        />
      );
      const card = container.firstChild as HTMLElement;
      expect(card).not.toHaveClass("bg-green-100");
      expect(card).not.toHaveClass("bg-yellow-100");
      expect(card).not.toHaveClass("bg-red-100");
    });

    it("renders without variant prop (defaults to default)", () => {
      const { container } = render(
        <CounterCard title="Default" count={50} maxCount={100} />
      );
      const card = container.firstChild as HTMLElement;
      expect(card).not.toHaveClass("bg-green-100");
      expect(card).not.toHaveClass("bg-yellow-100");
      expect(card).not.toHaveClass("bg-red-100");
    });
  });

  describe("Edge Cases", () => {
    it("renders without description", () => {
      render(<CounterCard title="No Description" count={42} />);
      expect(screen.getByText("No Description")).toBeInTheDocument();
      expect(screen.getByText("42")).toBeInTheDocument();
      expect(screen.queryByText("Active projects")).not.toBeInTheDocument();
    });

    it("renders without action button", () => {
      render(<CounterCard title="No Action" count={99} />);
      expect(screen.getByText("No Action")).toBeInTheDocument();
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <CounterCard
          title="Custom Class"
          count={123}
          className="custom-test-class"
        />
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass("custom-test-class");
    });

    it("formats large numbers correctly", () => {
      render(<CounterCard title="Large Number" count={1234567} />);
      expect(screen.getByText("1,234,567")).toBeInTheDocument();
    });

    it("formats large numbers in maxCount correctly", () => {
      render(
        <CounterCard
          title="Large Max"
          count={500000}
          maxCount={1000000}
        />
      );
      expect(screen.getByText("/1,000,000")).toBeInTheDocument();
    });

    it("shows slots info without maxCount does not render slots info", () => {
      render(
        <CounterCard
          title="No Max"
          count={50}
          showSlotsInfo={true}
          slotsAvailableText="slots"
        />
      );
      expect(screen.queryByText("slots")).not.toBeInTheDocument();
    });

    it("renders percentage variant without maxCount (should not apply colors)", () => {
      const { container } = render(
        <CounterCard title="No Max Percentage" count={50} variant="percentage" />
      );
      const card = container.firstChild as HTMLElement;
      expect(card).not.toHaveClass("bg-green-100");
      expect(card).not.toHaveClass("bg-yellow-100");
      expect(card).not.toHaveClass("bg-red-100");
    });

    it("calculates percentage correctly for edge case percentages", () => {
      // Test exactly 60% (boundary between green and yellow)
      const { container: container60 } = render(
        <CounterCard
          title="60%"
          count={60}
          maxCount={100}
          variant="percentage"
        />
      );
      const card60 = container60.firstChild as HTMLElement;
      expect(card60).toHaveClass("bg-yellow-100");

      // Test exactly 90% (boundary between yellow and red)
      const { container: container90 } = render(
        <CounterCard
          title="90%"
          count={90}
          maxCount={100}
          variant="percentage"
        />
      );
      const card90 = container90.firstChild as HTMLElement;
      expect(card90).toHaveClass("bg-red-100");
    });

    it("handles zero count", () => {
      render(<CounterCard title="Zero" count={0} />);
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("handles count equal to maxCount", () => {
      render(
        <CounterCard
          title="Full"
          count={100}
          maxCount={100}
          showSlotsInfo={true}
        />
      );
      expect(screen.getByText("0 slots disponíveis")).toBeInTheDocument();
    });
  });
}); 