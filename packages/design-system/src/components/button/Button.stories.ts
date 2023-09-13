import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    colors: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    label: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Button",
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    label: "Button",
  },
};

export const Xs: Story = {
  args: {
    size: "xs",
    label: "Button",
  },
};

export const Sm: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};

export const Md: Story = {
  args: {
    size: "md",
    label: "Button",
  },
};

export const Lg: Story = {
  args: {
    size: "lg",
    label: "Button",
  },
};
