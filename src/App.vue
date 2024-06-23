<template>
	<component :is="layout"></component>
</template>

<script setup lang="ts">
import { useConfigStore } from "@/stores";
import { computed } from "vue";
import { layoutMap } from "@/layout/layoutMap";

const userStore = useConfigStore();

const layout = computed(() => {
	const name = userStore.layout;
	return layoutMap[name] || "none";
});
</script>

<style scoped></style>
