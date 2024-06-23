<!--
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:49:00
 * @LastEditTime: 2024-06-23 09:21:58
 * @LastEditors: mulingyuer
 * @Description: home
 * @FilePath: \project_rules\src\views\home.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div>
		首页
		<router-link :to="{ name: 'Login' }">登录</router-link>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
	console.log("进入首页");
});
onUnmounted(() => {
	console.log("离开首页");
});
</script>

<style scoped></style>
