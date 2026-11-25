import type { StorybookConfig } from "@storybook/nextjs-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../components/**/*.mdx",
    "../components/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
  // У збірці для публікації Storybook лежить за адресою /storybook/. Базова адреса
  // потрібна, щоб файли знаходились і за адресою без слеша в кінці (Safari його ховає).
  managerHead: (head, { configType }) =>
    configType === "PRODUCTION" ? `<base href="/storybook/" />${head}` : head,
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    return config;
  },
};
export default config;
