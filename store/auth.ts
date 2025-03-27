import { create } from 'zustand';
import { StateCreator } from 'zustand';
import { KakaoProfile } from '@react-native-seoul/kakao-login';

interface IAuthState {
  isAuthenticated: boolean;
  user: KakaoProfile | null;
  setUser: (user: KakaoProfile | null) => void;
  logout: () => void;
}

const createAuthStore: StateCreator<IAuthState> = (set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user: KakaoProfile | null) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
});

export const useAuthStore = create<IAuthState>(createAuthStore); 