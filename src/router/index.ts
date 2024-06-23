import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { useConfigStore } from "@/stores";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

router.afterEach((to, _from) => {
	const configStore = useConfigStore();

	const layout = to.meta.layout ?? "admin";
	configStore.setLayout(layout);
});

export default router;
