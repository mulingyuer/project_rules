<template>
	<div>
		about
		<router-link :to="{ name: 'Home' }">首页</router-link>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
	console.log("进入关于");
});
onUnmounted(() => {
	console.log("离开关于");
});
</script>

<style scoped></style>
