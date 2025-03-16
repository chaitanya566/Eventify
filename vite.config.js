import { defineConfig } from "vite";

export default defineConfig({
  base: "/Eventify/",
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
