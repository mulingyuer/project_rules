/*
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:34:05
 * @LastEditTime: 2024-06-23 07:54:20
 * @LastEditors: mulingyuer
 * @Description: routes
 * @FilePath: \project_rules\src\router\routes.ts
 * 怎么可能会有bug！！！
 */
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/home.vue"),
		meta: {
			layout: "admin"
		}
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login.vue"),
		meta: {
			layout: "slide"
		}
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/about.vue"),
		meta: {
			layout: "none"
		}
	}
];
