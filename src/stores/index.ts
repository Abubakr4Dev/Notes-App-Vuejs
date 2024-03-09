// Utilities
import { createPinia } from "pinia";

export default createPinia();

import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
  state: () => ({
    displayAdd: false,

    links: [
      // { label: "Home", url: "/" },
      { label: "Login", url: "/Login" },
      // { label: 'About Us', url: '' },
      // { label: 'Services', url: '' },
      { label: "Register", url: "/register" },
    ],
  }),
  actions: {
    
  },
  getters: {
    
  },
});
