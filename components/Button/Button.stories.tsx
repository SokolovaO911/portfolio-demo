import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import type { ButtonProps } from "./Button";

// Для сторі беремо варіант «кнопка» (без href), щоб Controls працювали з простими пропсами.
type ButtonStoryProps = Extract<ButtonProps, { href?: undefined }>;

const meta: Meta<ButtonStoryProps> = {
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
};

export default meta;
type Story = StoryObj<ButtonStoryProps>;

export const Playground: Story = {};
