import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";

import type { Meta } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Component/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;


// eslint-disable-next-line no-unused-vars
const Template = (_: any) => {

  return (
    <div className="w-[500px]">
      <Breadcrumbs >
        <Link href={"/google"}>
          Nav 1
        </Link>
        <Link href={"/google/mytens"}>
          Nav 2
        </Link>
        <div >
          Nav 3
        </div>
      </Breadcrumbs>
    </div>
  );
};

export const View = Template.bind({});


