import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  let loadingScreen = false;

  return { loadingScreen };
});
