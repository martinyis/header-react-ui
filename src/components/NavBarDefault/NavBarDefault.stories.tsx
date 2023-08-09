import React from "react";
import { Story, Meta } from "@storybook/react";
import { Squash as Hamburger } from "hamburger-react";
import NavbarDefault, { Props } from "./NavBarDefault";

export default {
  title: "Components/NavbarDefault",
  component: NavbarDefault,
} as Meta;

const Template: Story<Props> = (args) => <NavbarDefault {...args} />;

// Story: Introducing the NavbarDefault Component
export const Default = Template.bind({});
Default.args = {
  logo: <h1>Logo</h1>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  position: "center",
  button: <button>Button</button>,
};
