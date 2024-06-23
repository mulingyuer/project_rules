/*
 * @Author: mulingyuer
 * @Date: 2024-06-23 09:06:12
 * @LastEditTime: 2024-06-23 09:17:21
 * @LastEditors: mulingyuer
 * @Description: 配置仓库
 * @FilePath: \project_rules\src\stores\modules\config\index.ts
 * 怎么可能会有bug！！！
 */
import { defineStore } from "pinia";
import type * as ConfigTypes from "./types";
import { ref } from "vue";
export type * from "./types";

export const useConfigStore = defineStore("config", () => {
	const layout = ref<ConfigTypes.Layout>("none");
	function setLayout(value: ConfigTypes.Layout) {
		layout.value = value;
	}

	return {
		layout,
		setLayout
	};
});
