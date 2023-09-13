import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Chip",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Chip",
  },
};

