<!--
 * @Author: mulingyuer
 * @Date: 2024-06-23 08:00:38
 * @LastEditTime: 2024-06-23 09:18:55
 * @LastEditors: mulingyuer
 * @Description: slide布局
 * @FilePath: \project_rules\src\layout\slide\index.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div>
		<aside>sidebar</aside>
		<main>
			<RouteView />
		</main>
	</div>
</template>

<script setup lang="ts">
import RouteView from "@/layout/components/RouteView.vue";
</script>

<style scoped></style>
