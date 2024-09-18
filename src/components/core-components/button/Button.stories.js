import ButtonLargeFullDark from "./ButtonLargeFullDark.html?raw";
import ButtonLargeFullLight from "./ButtonLargeFullLight.html?raw";
import ButtonLargeOutlineDark from "./ButtonLargeOutlineDark.html?raw";

// export default {
const meta = {
  title: "Core-Components/Button",
  // tags: ["autodocs"],
  // component: ButtonLargeFullDark,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

export default meta;

// export const Default = {
//   args: {
//     // component: ButtonLargeFullDark,
//   },
// };

export const LargeFullDark = () => ButtonLargeFullDark;
export const LargeFullLight = () => ButtonLargeFullLight;
// export const LargeOutlineDark = () => ButtonLargeOutlineDark;
