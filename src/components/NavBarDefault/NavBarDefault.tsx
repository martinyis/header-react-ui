import React from "react";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./styles/NavBarDefault.scss";
import Nav from "./blocks/Nav";

export type Typelinks = {
  name: string;
  link: string;
};
export interface Props {
  logo: React.ReactNode;
  maxHeight?: number;
  bgColor?: string;
  bgMobile?: string;
  items?: Typelinks[];
  position?: string;
  button?: React.ReactNode;
}
const NavbarDefault = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const handleLinkClick = (): void => {
    setNavbarOpen(false);
  };
  const links = props.items
    ? props.items
    : [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
      ];
  useEffect(() => {
    const handleScrollLock = () => {
      document.body.style.overflow = navbarOpen ? "hidden" : "auto";
    };
    handleScrollLock();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navbarOpen]);

  return (
    <header className="header">
      <Nav {...props} />
      <nav className="mobileNav">
        <div className="mobileNavBlock">
          <div className="logo">{props.logo}</div>
          <div className="hamburger">
            <Hamburger
              toggled={navbarOpen}
              toggle={setNavbarOpen}
              duration={0.3}
              easing="ease-in"
              color="#000000"
            />
          </div>
        </div>
        <div
          className={`mobileNavMenu ${navbarOpen ? "showMenu" : "hideMenu"}`}
          style={{
            transition: "transform 0.3s ease-in-out",
            backgroundColor: props.bgMobile ? props.bgMobile : "",
          }}
        >
          <ul className="mobileNavUl">
            {links.map((link, id) => (
              <li key={id}>
                <a href={link.link} onClick={handleLinkClick}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {props.button ? (
            <div className="mobileNavButton">{props.button}</div>
          ) : (
            <button className="mobileNavButton">Button</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavbarDefault;
