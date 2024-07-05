import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Testing",
  },
};

export const Outline: Story = {
  args: {
    children: "Testing",
    variant: "outline",
  },
};

export const OutlineGray: Story = {
  args: {
    children: "Testing",
    variant: "outline-gray",
  },
};

export const Ghost: Story = {
  args: {
    children: "Testing",
    variant: "ghost",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Testing",
    startIcon: <Icon icon="mdi:plus" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Testing",
    endIcon: <Icon icon="mdi:eye" />,
  },
};
