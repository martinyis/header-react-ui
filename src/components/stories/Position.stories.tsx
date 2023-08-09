import React from "react";
import { Story, Meta } from "@storybook/react";
import { Squash as Hamburger } from "hamburger-react";
import NavbarDefault, { Props } from "./../NavBarDefault/NavBarDefault";

export default {
  title: "Components/Position",
  component: NavbarDefault,
} as Meta;

const Template: Story<Props> = (args) => <NavbarDefault {...args} />;
// Story: Introducing the Position Component
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
};
// Story: Position Component with position: left
export const Left = Template.bind({});
Left.args = {
  logo: <h1>Logo</h1>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  position: "left",
};
// Story: Position Component with position: right
export const Right = Template.bind({});
Right.args = {
  logo: <h1>Logo</h1>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },

    { name: "Contact", link: "/contact" },
  ],
  position: "right",
};
// Story: Position Component with position: center
export const Center = Template.bind({});
Center.args = {
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
};
// Story: Position Component with position: center and no items
export const CenterNoItems = Template.bind({});
CenterNoItems.args = {
  logo: <h1>Logo</h1>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [],
  position: "center",
};
// Story: Position Component with position: left and no items
export const LeftNoItems = Template.bind({});
LeftNoItems.args = {
  logo: <h1>Logo</h1>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [],
  position: "left",
};
// Story: Position Component with position: right and no items
export const RightNoItems = Template.bind({});
RightNoItems.args = {
  logo: <h1>Logo</h1>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [],
  position: "right",
};
// Story: Position Component with position: center and no logo
export const CenterNoLogo = Template.bind({});
CenterNoLogo.args = {
  logo: <></>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  position: "center",
};
// Story: Position Component with position: left and no logo
export const LeftNoLogo = Template.bind({});
LeftNoLogo.args = {
  logo: <></>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [
    { name: "Home", link: "/" },

    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  position: "left",
};
// Story: Position Component with position: right and no logo
export const RightNoLogo = Template.bind({});
RightNoLogo.args = {
  logo: <></>,
  maxHeight: 100,
  bgColor: "#ffffff",
  bgMobile: "#ffffff",
  items: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  position: "right",
};
