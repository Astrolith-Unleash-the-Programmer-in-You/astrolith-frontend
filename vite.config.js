/** @type {import('tailwindcss').Config} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import nodePolyfills from "vite-plugin-node-stdlib-browser";

export default defineConfig({
  content: ["./index.html", "./src/**/*.glb.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [nodePolyfills(), react()],
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
});
