import { create } from "zustand";

const useAuthStore = create((set) => ({
  accessToken: localStorage.getItem("sb-bvhfaldehevyffbdyunp-auth-token") || "",
  setAccessToken: () => set((value) => ({ accessToken: value })),
  purgeToken: () => set(() => ({ accessToken: "" })),
}));

export default useAuthStore;
