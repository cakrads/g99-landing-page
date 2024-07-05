import { Icon } from "@iconify-icon/react";

import { ButtonIcon } from "@/components/ui/button-icon";

import type { Meta, StoryObj } from "@storybook/react";

Icon.displayName = "Icon";

const meta = {
  title: "Component/ButtonIcon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" }
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Icon icon="mdi:eye" />,
  },
};

export const Outline: Story = {
  args: {
    children: <Icon icon="mdi:eye" />,
    variant: "outline",
  },
};

export const OutlineGray: Story = {
  args: {
    children: <Icon icon="mdi:eye" />,
    variant: "outline-gray",
  },
};

export const Ghost: Story = {
  args: {
    children: <Icon icon="mdi:eye" />,
    variant: "ghost",
  },
};
