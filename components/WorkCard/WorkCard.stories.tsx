import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/work-cover-example.jpg";
import { WorkCard } from "./WorkCard";

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  decorators: [
    (Story) => (
      <div className="max-w-content bg-canvas p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageAlt: { control: "text" },
    href: { control: "text" },
    image: { control: false },
  },
  args: {
    title: "Website Redesign",
    description:
      "Redesign of a website for a company that brings people together through adventure games.",
    image: cover,
    imageAlt: "Redesigned website shown on a desktop screen",
    href: "/projects/website-redesign",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
