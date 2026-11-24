import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="bg-canvas p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
    children: { control: "text" },
  },
  args: {
    children: "Send message",
    variant: "primary",
    size: "lg",
    disabled: false,
    disabledReason: "Fill in all fields to send your message.",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
