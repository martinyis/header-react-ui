import React from "react";
import { render } from "@testing-library/react";

import NavbarDefault from "./NavBarDefault";

describe("NavBarDefault", () => {
  test("renders NavBarDefault component", () => {
    render(<NavbarDefault />);
  });
});
