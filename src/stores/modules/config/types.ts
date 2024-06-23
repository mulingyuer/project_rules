/*
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:39:56
 * @LastEditTime: 2024-06-23 09:17:04
 * @LastEditors: mulingyuer
 * @Description: 配置仓库类型
 * @FilePath: \project_rules\src\stores\modules\config\types.ts
 * 怎么可能会有bug！！！
 */
import { layoutMap } from "@/layout/layoutMap";

/** layout */
export type Layout = keyof typeof layoutMap;
