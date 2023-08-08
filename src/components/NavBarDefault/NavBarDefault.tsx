import React from "react";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./styles/NavBarDefault.scss";

export interface Props {
  logo: React.ReactNode;
  maxHeight?: number;
  bgColor?: string;
  bgMobile?: string;
}
const NavbarDefault = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const handleLinkClick = (): void => {
    setNavbarOpen(false);
  };
  const links = [
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
      <nav
        className="deskTopNav"
        style={{
          maxHeight: props.maxHeight ? props.maxHeight + "px" : "100px",
          backgroundColor: props.bgColor ? props.bgColor : "",
        }}
      >
        <div className="logo">{props.logo}</div>
        <ul className="deskTopUl">
          {links.map((link, id) => (
            <li className="deskTopLi" key={id}>
              <a className="deskTopLi" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
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
        </div>
      </nav>
    </header>
  );
};

export default NavbarDefault;
