type User = {
  id: number;
  name: string;
  avatar?: string;
  email?: string;
  phone?: string;
};

export const testUser: User = {
  id: 1,
  name: "Daniil Bogaciov",
  avatar: "https://avatars.githubusercontent.com/u/71877453?s=400&u=b8e741777f257490c3623f1b9c7dc8775141af5e&v=4",
};

export const useUserStore = defineStore("user", () => {
  const authModalOpened = ref(false);
  const user = ref<User | null>(null);
  watch(
    user,
    (newUser) => {
      if (newUser) {
        authModalOpened.value = false;
      }
    },
    { immediate: true }
  );

  const logout = () => {
    user.value = null;
  };

  return {
    user,
    authModalOpened,
    logout,
  };
});
