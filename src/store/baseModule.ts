import { Module } from "vuex";
import {
    ToastContent,
    ToastOptions,
  } from "vue-toastification/dist/types/src/types";
import Vue from "vue/types/umd";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseModule: Module<any, any> = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    sendMessage(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      { commit },
      config: { content: ToastContent; options: ToastOptions }
    ) {
      Vue.$toast(config.content, config.options);
    },
  },
  getters: {},
};

export default baseModule;
