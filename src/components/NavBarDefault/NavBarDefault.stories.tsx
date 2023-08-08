// TestDiv.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import NavBarDefault from "./NavBarDefault";

// Create a meta description for the TestDiv component
export default {
  title: "NavBars/NavBarDefault",
  component: NavBarDefault,
} as Meta;

// Create a template for the component story
const Template: Story = (args) => <NavBarDefault {...args} />;

// Define your component stories with different variations
export const Default = Template.bind({});
