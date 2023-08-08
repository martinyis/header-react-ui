import React from "react";
import { render } from "@testing-library/react";

import NavbarDefault from "./NavBarDefault";

//logo vompnet below
const logo = <div>Your Logo Here</div>;

describe("NavBarDefault", () => {
  test("renders NavBarDefault component", () => {
    render(<NavbarDefault logo={logo} />);
  });
});

//maxHeight
describe("NavBarDefault", () => {
  test("renders NavBarDefault component", () => {
    render(<NavbarDefault logo={logo} maxHeight={100} />);
  });
});

//bgColor
describe("NavBarDefault", () => {
  test("renders NavBarDefault component", () => {
    render(<NavbarDefault logo={logo} bgColor={"#f4f50f"} />);
  });
});

//bgMobile
describe("NavBarDefault", () => {
  test("renders NavBarDefault component", () => {
    render(<NavbarDefault logo={logo} bgMobile={"#f4f50f"} />);
  });
});
