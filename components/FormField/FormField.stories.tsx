import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  decorators: [
    (Story) => (
      <div className="bg-canvas p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { control: "text" },
    defaultValue: { control: "text", description: "Значення поля" },
    placeholder: { control: "text" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
    multiline: { control: "boolean" },
    required: { control: "boolean", description: "Обовʼязкове поле: після підпису стоїть зірочка" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Email",
    defaultValue: "",
    placeholder: "name@company.com",
    error: false,
    errorMessage: "Enter a valid email address.",
    multiline: false,
    required: false,
    disabled: false,
  },
  render: (args) => <FormField key={String(args.defaultValue)} {...args} />,
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
