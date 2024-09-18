import RichTextHTML from "./html/RichText.html?raw";

const meta = {
  title: "Core-Components/RichText",
  // tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

export default meta;

export const RichText = () => RichTextHTML;
