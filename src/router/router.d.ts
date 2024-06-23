/*
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:50:57
 * @LastEditTime: 2024-06-23 07:53:26
 * @LastEditors: mulingyuer
 * @Description: 类型声明
 * @FilePath: \project_rules\src\router\router.d.ts
 * 怎么可能会有bug！！！
 */
import "vue-router";
import { layoutMap } from "@/layout/layoutMap";

declare module "vue-router" {
	interface RouteMeta {
		/** 页面布局 */
		layout?: keyof typeof layoutMap;
	}
}

export {};
