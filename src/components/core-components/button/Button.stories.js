import ButtonLargeFullDark from "./html/ButtonLargeFullDark.html?raw";
import ButtonLargeFullLight from "./html/ButtonLargeFullLight.html?raw";
import ButtonLargeOutlineDark from "./html/ButtonLargeOutlineDark.html?raw";
import LinkLargeFullDark from "./html/LinkLargeFullDark.html?raw";
import { CustomButton } from "./CustomButton.jsx";

// export default {
const meta = {
  title: "Core-Components/Button",
  // tags: ["autodocs"],
  component: CustomButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: {
    //   default: "dark",
    // },
  },
};

export default meta;

export const LargeFullDark = () => ButtonLargeFullDark;
export const LargeFullDarkAsLink = () => LinkLargeFullDark;

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

export const LargeOutlineDark = () => ButtonLargeOutlineDark;
export const CustomButtonWithArgs = {
  args: {
    label: "Custom button with click event",
    onClick: `alert("Button was clicked")`,
  },
};
