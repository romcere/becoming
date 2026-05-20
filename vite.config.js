import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import UniPages from "@uni-helper/vite-plugin-uni-pages";
import Components from "@uni-helper/vite-plugin-uni-components";

// import { WotV2Resolver } from "@uni-helper/vite-plugin-uni-components/resolvers";
import { WotResolver } from "./wot-ui-resolver";

import { ZPagingResolver } from "@uni-helper/vite-plugin-uni-components/resolvers";
import { UniEchartsResolver } from "uni-echarts/resolver";
import UniLayouts from "@uni-helper/vite-plugin-uni-layouts";
import UniManifest from "@uni-helper/vite-plugin-uni-manifest";
import UniPlatform from "@uni-helper/vite-plugin-uni-platform";
import UniRoot from "@uni-ku/root";
import ComponentPlaceholder from "@binbinji/vite-plugin-component-placeholder";
import { UniEcharts } from "uni-echarts/vite";
import Uni from "@uni-helper/plugin-uni";
import UnoCSS from "unocss/vite";

export default defineConfig({
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	plugins: [
		// https://uni-helper.js.org/vite-plugin-uni-pages
		UniPages(),
		// https://uni-helper.js.org/vite-plugin-uni-components
		Components({
			dts: true,
			resolvers: [UniEchartsResolver(), ZPagingResolver(), WotResolver()],
		}),
		// https://uni-helper.js.org/vite-plugin-uni-layouts
		UniLayouts(),
		// https://uni-helper.js.org/vite-plugin-uni-manifest
		UniManifest(),
		// https://uni-helper.js.org/vite-plugin-uni-platform
		UniPlatform(),
		// https://github.com/uni-ku/root
		UniRoot(),
		// https://github.com/chouchouji/vite-plugin-component-placeholder
		ComponentPlaceholder(),
		// https://uni-echarts.xiaohe.ink
		UniEcharts(),
		// https://uni-helper.js.org/plugin-uni
		Uni(),
		UnoCSS(),
	],
	build: {
		target: "es6",
		cssTarget: "chrome61",
	},
	optimizeDeps: {
		exclude: ["vue-demi", "uni-echarts"],
	},
});
