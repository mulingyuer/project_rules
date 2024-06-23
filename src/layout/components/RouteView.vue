<!--
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:58:40
 * @LastEditTime: 2024-06-23 07:59:56
 * @LastEditors: mulingyuer
 * @Description: 路由视图
 * @FilePath: \project_rules\src\layout\components\RouteView.vue
 * 怎么可能会有bug！！！
-->
<template>
	<router-view v-slot="{ Component }">
		<transition>
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</transition>
	</router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
