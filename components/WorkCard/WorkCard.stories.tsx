import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/work-cover-example.jpg";
import { WorkCard } from "./WorkCard";

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  decorators: [
    (Story, context) => (
      <div
        className={`max-w-content p-6 ${
          context.args.surface === "accent" ? "bg-accent" : "bg-canvas"
        }`}
      >
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
    imagePosition: {
      control: "select",
      options: ["center", "top"],
      description: "Яку частину обкладинки лишати при обрізанні",
    },
    showTitle: {
      control: "boolean",
      description: "Вимкни, якщо назва вже є на обкладинці (логотип)",
    },
    meta: {
      control: "text",
      description: "Рядок над описом: тип і термін (порожньо: не показується)",
    },
    surface: {
      control: "select",
      options: ["canvas", "accent"],
      description: "Фон, на якому лежить картка",
    },
  },
  args: {
    title: "Website Redesign",
    description:
      "Redesign of a website for a company that brings people together through adventure games.",
    image: cover,
    imageAlt: "Redesigned website shown on a desktop screen",
    href: "/projects/website-redesign",
    imagePosition: "center",
    showTitle: true,
    surface: "canvas",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
