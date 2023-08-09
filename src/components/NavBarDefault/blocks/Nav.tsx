import React from "react";
import { Props, Typelinks } from "../NavBarDefault";
const Nav = (props: Props) => {
  const links = props.items
    ? props.items
    : [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
      ];
  return (
    <nav
      className="deskTopNav"
      style={{
        maxHeight: props.maxHeight ? props.maxHeight + "px" : "100px",
        backgroundColor: props.bgColor ? props.bgColor : "",
      }}
    >
      {props.position === "right" ? (
        <>
          <div className="logo">{props.logo}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ul className="deskTopUl">
              {links.map((link, id) => (
                <li className="deskTopLi" key={id}>
                  <a className="deskTopLi" href={link.link}>
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
        </>
      ) : props.position === "left" ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
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
          </div>
          {props.button ? (
            <div className="mobileNavButton">{props.button}</div>
          ) : (
            <button className="mobileNavButton">Button</button>
          )}
        </>
      ) : (
        <>
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
          {props.button ? (
            <div className="mobileNavButton">{props.button}</div>
          ) : (
            <button className="mobileNavButton">Button</button>
          )}
        </>
      )}
    </nav>
  );
};

export default Nav;
