import ColoursExamples from "./Colours.demo.html?raw";

const meta = {
  title: "Foundation/Colours",
  tags: ["autodocs"],
};

export default meta;

export const Demo = {
  parameters: {
    backgrounds: {
      layout: "centered",
    },
    tags: [],
  },
  render() {
    return ColoursExamples;
  },
};
