import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import vitePluginRaw from "vite-plugin-raw";
// import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  // assetsInclude: ["**/*.hbs"],
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    // vitePluginRaw({
    //   match: /\.html$/,
    // }),
    // handlebars({
    //   context: {
    //     title: "Hello, Vite!",
    //   },
    // }),
  ],
});
