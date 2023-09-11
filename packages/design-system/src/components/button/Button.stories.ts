import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    type: "contained",
    label: "Button",
  },
};

export const Outlined: Story = {
  args: {
    type: "outlined",
    label: "Button",
  },
};
export const Link: Story = {
  args: {
    type: "link",
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
