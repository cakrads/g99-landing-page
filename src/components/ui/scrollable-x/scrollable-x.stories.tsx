import { ScrollableX } from "@/components/ui/scrollable-x";

import type { Meta, StoryObj } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Component/ScrollableX",
  component: ScrollableX,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof ScrollableX>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: "max-w-[250px]",
    children: (
      <div className='flex gap-2 w-[600px]'>
        <div className='rounded-lg bg-gray-50 w-[200px] h-[30px] grid place-items-center text-xl' >1</div>
        <div className='rounded-lg bg-gray-50 w-[200px] h-[30px] grid place-items-center text-xl' >2</div>
        <div className='rounded-lg bg-gray-50 w-[200px] h-[30px] grid place-items-center text-xl' >3</div>
        <div className='rounded-lg bg-gray-50 w-[200px] h-[30px] grid place-items-center text-xl' >4</div>
        <div className='rounded-lg bg-gray-50 w-[200px] h-[30px] grid place-items-center text-xl' >5</div>
        <div className='rounded-lg bg-gray-50 w-[200px] h-[30px] grid place-items-center text-xl' >6</div>
        <div className='rounded-lg bg-gray-50 w-[200px] h-[30px] grid place-items-center text-xl' >7</div>
      </div>
    ),
  },
};
