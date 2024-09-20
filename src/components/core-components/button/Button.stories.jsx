import ButtonLargePrimaryRed from "./html/ButtonLargePrimaryRed.html?raw";
import ButtonLargeFullDark from "./html/ButtonLargeFullDark.html?raw";
import ButtonLargeFullLight from "./html/ButtonLargeFullLight.html?raw";
import ButtonLargeOutlineDark from "./html/ButtonLargeOutlineDark.html?raw";
import ButtonLargeOutlineLight from "./html/ButtonLargeOutlineLight.html?raw";
import ButtonSmallFullDark from "./html/ButtonSmallFullDark.html?raw";
import ButtonSmallFullLight from "./html/ButtonSmallFullLight.html?raw";
import ButtonSmallOutlineDark from "./html/ButtonSmallOutlineDark.html?raw";
import ButtonSmallOutlineLight from "./html/ButtonSmallOutlineLight.html?raw";
import LinkLargeFullDark from "./html/LinkLargeFullDark.html?raw";
import CustomButton from "./CustomButton.jsx";

// export default {
const meta = {
  title: "Core-Components/Button",
  // tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

export default meta;

// To just diplay an external html file as a story, use the following syntax. Note this method does not allow for the use of args and decorators but parameters can be used.
export const LargePrimaryRed = () => ButtonLargePrimaryRed;
export const LargeFullDark = () => ButtonLargeFullDark;

export const LargeFullDarkAsLink = () => LinkLargeFullDark;

export const LargeOutlineDark = () => ButtonLargeOutlineDark;

export const LargeOutlineLight = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render() {
    return ButtonLargeOutlineLight;
  },
};

export const LargeFullLight = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render() {
    return ButtonLargeFullLight;
  },
};

export const SmallFullDark = () => ButtonSmallFullDark;

export const SmallFullLight = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render() {
    return ButtonSmallFullLight;
  },
};

export const SmallOutlineDark = () => ButtonSmallOutlineDark;

export const SmallOutlineLight = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render() {
    return ButtonSmallOutlineLight;
  },
};

// To add decorators to Storybook HTML the stories need to be generated using the render function with document.createElement, .appendChild, .setAttribute etc
export const ResponsiveContainerExample = {
  render: (args) => {
    const btnContainer = document.createElement("div");
    const btn = document.createElement("button");
    btnContainer.appendChild(btn);
    btn.innerText = args.label;
    btn.setAttribute("onclick", args.onClick);

    btnContainer.className = [
      "button",
      "button-large",
      "button-full-dark",
    ].join(" ");

    return btnContainer;
  },
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.style.padding = "1rem";
      decorator.appendChild(story());
      return decorator;
    },
  ],
  args: {
    label: "Responsive container example",
    onClick: `alert("Button was clicked")`,
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const CustomButtonWithArgs = {
  render: (args) => {
    const btnContainer = document.createElement("div");
    const btn = document.createElement("button");
    btnContainer.appendChild(btn);
    btn.innerText = args.label;
    btn.setAttribute("onclick", args.onClick);

    btnContainer.className = [
      "button",
      "button-large",
      "button-full-dark",
    ].join(" ");

    return btnContainer;
  },
  args: {
    label: "Custom button with click event",
    onClick: `alert("Button was clicked")`,
  },
};
