<!--
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:56:54
 * @LastEditTime: 2024-06-23 17:18:03
 * @LastEditors: mulingyuer
 * @Description: admin布局
 * @FilePath: \project_rules\src\layout\admin\index.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div>
		<header>header</header>
		<aside>sidebar</aside>
		<main>
			main
			<RouteView />
		</main>
		<footer>footer</footer>
	</div>
</template>

<script setup lang="ts">
import RouteView from "@/layout/components/RouteView.vue";
</script>

<style scoped></style>
