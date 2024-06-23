<!--
 * @Author: mulingyuer
 * @Date: 2024-06-23 07:49:29
 * @LastEditTime: 2024-06-23 09:22:31
 * @LastEditors: mulingyuer
 * @Description: 登录页
 * @FilePath: \project_rules\src\views\login.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div>
		登录
		<router-link :to="{ name: 'About' }">关于</router-link>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
	console.log("进入登录");
});
onUnmounted(() => {
	console.log("离开登录");
});
</script>

<style scoped></style>
