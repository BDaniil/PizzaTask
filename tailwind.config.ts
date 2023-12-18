import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.vue",
    "./views/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.ts",
    "./utils/**/*.ts",
    "./nuxt.config.ts",
    "./app.vue",
  ],
  theme: {
    extend: {
      container: {
        padding: "7%",
        center: true,
        screens: {
          DEFAULT: "1536px",
        },
      },
    },
  },
};
