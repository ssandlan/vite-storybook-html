/** @type { import('@storybook/html').Preview } */

import "../src/css/index.scss";

const preview = {
  parameters: {
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
