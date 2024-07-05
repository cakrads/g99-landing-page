import type { Meta, StoryObj } from "@storybook/react";

import Page from "./../app/page";

const meta = {
  title: "Example/Starter-Next-Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};