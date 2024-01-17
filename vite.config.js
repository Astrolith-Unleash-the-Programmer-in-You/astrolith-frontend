/** @type {import('tailwindcss').Config} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import { nodePolyfills } from "vite-plugin-node-polyfills";


export default defineConfig({
	content: ["./index.html", "./src/**/*.glb.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	// resolve: {
	// 	alias: {
	// 		events: "rollup-plugin-node-polyfills/polyfills/events",
	// 	},
	// },
	build: {
		rollupOptions: {
			external: ["fs/promises"],
		},
	},
	plugins: [
		NodeGlobalsPolyfillPlugin({ buffer: true, process: true }),
		NodeModulesPolyfillPlugin(),
		nodePolyfills({
			globals: {
				Buffer: true,
				global: true,
				process: true,
			},
			protocolImports: true,
		}),
		react(),
	],
	optimizeDeps: { exclude: ["fsevents"] },
	assetsInclude: ["**/*.glb"],
});
