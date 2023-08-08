import React from "react";
import { Story, Meta } from "@storybook/react";
import { Squash as Hamburger } from "hamburger-react";
import NavbarDefault, { Props } from "./NavBarDefault";

export default {
  title: "Components/NavbarDefault",
  component: NavbarDefault,
} as Meta;

const Template: Story<Props> = (args) => <NavbarDefault {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: <div>Your Logo Here</div>,
  maxHeight: 100,
  bgColor: "#f4f50f",
};

export const NoProps = Template.bind({});
NoProps.args = {};

export const NoLogo = Template.bind({});
NoLogo.args = {
  maxHeight: 100,
  bgColor: "#f4f50f",
};

export const NoMaxHeight = Template.bind({});
NoMaxHeight.args = {
  logo: <div>Your Logo Here</div>,
  bgColor: "#f4f50f",
};

export const NoBgColor = Template.bind({});

NoBgColor.args = {
  logo: <div>Your Logo Here</div>,
  maxHeight: 100,
};
//big height

export const BigHeight = Template.bind({});
BigHeight.args = {
  logo: <div>Your Logo Here</div>,
  maxHeight: 600,
  bgColor: "#f4f50f",
};

//bgmovile

export const BgMobile = Template.bind({});
BgMobile.args = {
  logo: <div>Your Logo Here</div>,
  maxHeight: 100,
  bgColor: "#f4f50f",
  bgMobile: "#f4f50f",
};
