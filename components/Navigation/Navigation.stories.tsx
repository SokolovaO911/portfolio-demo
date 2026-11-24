import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    docs: { story: { inline: false, height: "320px" } },
  },
  decorators: [
    (Story) => (
      <div className="bg-canvas p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    activeHref: {
      control: "select",
      options: ["/projects", "/about", "/contacts", ""],
      description: "Активний пункт (порожнє значення: жоден не активний)",
    },
    items: { control: false },
  },
  args: {
    items: [
      { label: "Projects", href: "/projects" },
      { label: "About Me", href: "/about" },
      { label: "Contact", href: "/contacts" },
    ],
    activeHref: "/projects",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
