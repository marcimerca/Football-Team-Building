import { ref, computed } from "vue";

const isLoading = ref(true);

export const setIsLoading = (loading) => (isLoading.value = loading);

export const loading = computed(() => isLoading.value);
