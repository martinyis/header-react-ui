# React Header Ui Library

Your hassle-free solution for crafting dynamic headers within your React projects. Say goodbye to the frustration of designing distinct navigation bars for various screen sizes and laboring over intricate effects. With header-react-ui, all the heavy lifting is taken care of, leaving you with a seamless and effortless experience in header creation.

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation:

```bash
npm install header-react-ui
```

## Usage:

> For now we have only one component and it is `<NavBarDefault/>`, but we will add more components in the future.

```jsx
import React from "react";
import { NavBarDefault } from "header-react-ui";

const App = () => {
  return <NavBarDefault logo={<div>Your Logo Here</div>} />;
};

export default App;
```

## Props

Each component accepts a set of props that allow you to customize its behavior and appearance. Here's a list of available props for each component:

### ComponentName

| Prop Name   | Type                          | Default Value                                                                                               | Description                                                                                                    |
| ----------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| items       | Array of objects (name, link) | `[ { name: "Home", link: "/" }, { name: "About", link: "/about" }, { name: "Contact", link: "/contact" } ]` | Navigation items for the sidebar.                                                                              |
| `logo`      | `ReactNode`                   | `<div>Your Logo Here</div>`                                                                                 | Logo displayed on the left side of the sidebar.                                                                |
| `maxHeight` | `number`                      | `100px`                                                                                                     | Maximum height of the header.                                                                                  |
| `bgColor`   | `string`                      | `rgb(213, 248, 248)`                                                                                        | The color of the background for large devices.                                                                 |
| `bgMobile`  | `string`                      | `rgb(213, 248, 248)`                                                                                        | The color of the background for small devices.                                                                 |
| `position`  | `string`                      | `center`                                                                                                    | The postion of the navlinks for the navbar. See example below. All possible values ('left', 'right', 'center') |
| `button`    | `ReactNode`                   | `<button>button<button/>`                                                                                   | Pass any button you want to see on the right side of the navbar                                                |

**Example:**

```jsx
import { ComponentName } from "your-react-ui-library";
const logo = <div>Your Logo Here</div>;
function App() {
  return <NavBarDefault logo={logo} />;
}
```

## Contributing:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
//visit Contributing.md for more details

## License:

[MIT](https://choosealicense.com/licenses/mit/)

```

```
