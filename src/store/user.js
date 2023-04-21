import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref();
  const isAuthenticated = computed(() => !!user.value);
  const setUser = (newUser) => {
    user.value = newUser;
  };
  return { user, isAuthenticated, setUser };
});
