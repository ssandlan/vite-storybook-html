/** @type { import('@storybook/html').Preview } */

import "../src/css/index.scss";
import "../src/components/core-components/button/button.scss";
import "../src/components/core-components/rich-text/rich-text.scss";

const preview = {
  // decorators: [(Story) => <Story />],
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#0c2141" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: { order: ["Foundation", "Core Components", "Components"] },
    },
  },
};

export default preview;
