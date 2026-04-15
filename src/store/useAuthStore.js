import { create } from 'zustand';

// Create a global store to manage user authentication
export const useAuthStore = create((set) => ({
  // 1. Initial State
  user: null,
  isAuthenticated: false,

  // 2. Actions (functions to update the state)
  login: (userData) => set({ 
    user: userData, 
    isAuthenticated: true 
  }),
  
  logout: () => set({ 
    user: null, 
    isAuthenticated: false 
  }),
}));