/*
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:56:30
 * @LastEditTime: 2024-06-23 08:05:00
 * @LastEditors: mulingyuer
 * @Description: 布局map
 * @FilePath: \project_rules\src\layout\layoutMap.ts
 * 怎么可能会有bug！！！
 */
import AdminLayout from "./admin/index.vue";
import SlideLayout from "./slide/index.vue";
import RouteView from "@/layout/components/RouteView.vue";

export const layoutMap = {
	admin: AdminLayout,
	slide: SlideLayout,
	none: RouteView
};
