import { kebabCase } from "@uni-helper/vite-plugin-uni-components";

export function WotResolver() {
	return {
		type: "component",
		resolve: (name) => {
			if (name.match(/^Wd[A-Z]/)) {
				const compName = kebabCase(name);
				return {
					name,
					from: `@wot-ui/ui/components/${compName}/${compName}.vue`,
				};
			}
		},
	};
}
