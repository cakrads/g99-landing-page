import { Icon } from "@iconify-icon/react";

import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


Icon.displayName = "Icon";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

const meta = {
  title: "Component/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col space-y-1.5">
        <h6 className="font-semibold leading-none tracking-tight">Notifications</h6>
        <span className="text-sm text-muted-foreground">You have 3 unread messages.</span>
        <div className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <Icon icon="mdi:bell" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <Button className="w-full" startIcon={<Icon icon="mdi:check" />}>
            Mark all as read
          </Button>
        </div>
      </div>
    ),
  },
};
