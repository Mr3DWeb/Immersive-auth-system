import { create } from "zustand";

export type AuthView = 'login' | 'signup' | 'dashboard';
export type ShaderStatus = 'idle' | 'error' | 'success' | 'tunnel';

interface AuthState {
  view:AuthView;
  status:ShaderStatus

  setView:(view:AuthView) => void;
  setStatus: (status: ShaderStatus) => void;

  triggerError: () => void;
  triggerSuccess: () => void;
  triggerTransition: () => void;
}

const useAuthStore = create<AuthState>((set)=>({
  view:'login',
  status:'idle',

  setView:(view)=>set({ view }),
  setStatus:(status)=>set({ status }),

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