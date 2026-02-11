import { create } from "zustand";

export type AuthView = 'login' | 'signup' | 'dashboard';
export type ShaderStatus = 'idle' | 'tunnel' | 'success' | 'error';

interface AuthState {
  view:AuthView;
  status:ShaderStatus;
  isAnimating:boolean;


  setView:(view:AuthView) => void;
  setStatus: (status: ShaderStatus) => void;
  setIsAnimating:(state:boolean) => void;

  triggerError: () => void;
  triggerSuccess: () => void;
  triggerTransition: () => void;
}

const useAuthStore = create<AuthState>((set)=>({
  view:'login',
  status:'idle',
  isAnimating: false,

  setView:(view)=>set({ view }),
  setStatus:(status)=>set({ status }),
  setIsAnimating: (isAnimating) => set({ isAnimating }),

  triggerError: () => {
    set({ status: 'error' });
    setTimeout(() => set({ status: 'idle' }), 2000);
  },

  triggerSuccess: () => {
   set({ status: 'success' });
  },

  triggerTransition: () => {
    set({ status: 'tunnel' });
  },

}))

export default useAuthStore;