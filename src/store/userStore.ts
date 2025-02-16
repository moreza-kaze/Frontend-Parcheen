import { create } from "zustand";

interface UserStore {
    user: any | null;
    setUser: (user: any) => void;
}
export const useUserStore = create<UserStore>((set) => ({
    user: {},
    setUser: (user: any) => set({ user }),
}))
