import { create } from "zustand";

type AuthStoreState = {
  accountId: number | null;
  name: string | null;
}

type AuthStoreActions = {
  loginUser: (accountId: number, name: string) => void;
  logoutUser: () => void;
  isUserLoggedIn: () => boolean;
}

const initialAuthState: AuthStoreState = {
  accountId: null,
  name: null,
}

export const useAuthStore = create<AuthStoreState & AuthStoreActions>((set, get) => ({
  ...initialAuthState,

  loginUser: (accountId: number, name: string) => {
    set({ accountId, name });
  },
  logoutUser: () => {
    set(initialAuthState);
  },
  isUserLoggedIn: () => {
    return get().accountId !== null;
  }
}));
