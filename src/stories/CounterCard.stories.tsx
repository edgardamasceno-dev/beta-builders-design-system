import { CounterCard } from "@/components/counter-card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CounterCard> = {
  title: "Components/CounterCard",
  component: CounterCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    count: { control: "number" },
    maxCount: { control: "number" },
    description: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "percentage"],
    },
    showSlotsInfo: { control: "boolean" },
    slotsAvailableText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Total de Vagas",
    count: 78,
    maxCount: 100,
    description: "Acompanhe o número de vagas disponíveis",
  },
};

export const Percentage: Story = {
  args: {
    title: "Vagas Preenchidas",
    count: 78,
    maxCount: 100,
    variant: "percentage",
    showSlotsInfo: true,
  },
};

export const HighUsage: Story = {
  args: {
    title: "Vagas Preenchidas",
    count: 95,
    maxCount: 100,
    variant: "percentage",
    showSlotsInfo: true,
  },
};

export const WithoutMaxCount: Story = {
  args: {
    title: "Visitantes Online",
    count: 1250,
  },
};
