// wot-ui 自动导入 https://wot-ui.cn/guide/quick-use.html#%E5%9F%BA%E4%BA%8E-vite-%E9%85%8D%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%BC%95%E5%85%A5%E7%BB%84%E4%BB%B6%E6%96%B9%E6%A1%88-1
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
