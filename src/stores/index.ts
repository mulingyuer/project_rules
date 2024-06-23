/*
 * @Author: mulingyuer
 * @Date: 2024-06-23 09:10:39
 * @LastEditTime: 2024-06-23 09:10:39
 * @LastEditors: mulingyuer
 * @Description: pinia
 * @FilePath: \project_rules\src\stores\index.ts
 * 怎么可能会有bug！！！
 */
import { createPinia } from "pinia";
import type { App } from "vue";
export * from "./modules";

const pinia = createPinia();

export const PiniaPlugin = {
	install(app: App) {
		app.use(pinia);
	}
};
