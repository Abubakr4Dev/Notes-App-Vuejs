// Utilities
import {
  createNewNoteFn,
  deleteNoteFn,
  getAllNotesFn,
  loginUserFn,
  registerUserFn,
  updateNoteFn,
} from "@/api/axios-api";
import type { ILoginInput, IRegisterInput } from "@/api/types";
import type { INote, INotes, IUpdatedNote } from "@/interfaces/notes";
import { createPinia } from "pinia";

export default createPinia();

import { defineStore } from "pinia";

type State = {
  token: string | null;
  notes: INotes[];
  displayAddModal: boolean;
  displayEditModal: boolean;
  showPassword: boolean;
  rules: object;
  links: object[];
  isLoaded: boolean;
};

export const useStore = defineStore("mainStore", {
  state: (): State => ({
    token: localStorage.getItem("auth-token"),
    displayAddModal: false,
    displayEditModal: false,
    showPassword: false,
    rules: {
      required: (value: string) => !!value || "Field is required",
    },
    notes: [],
    isLoaded: false,

    links: [
      { label: "Login", url: "/Login" },
      { label: "Register", url: "/register" },
    ],
  }),
  actions: {
    setToken(value: string) {
      this.token = value;
      localStorage.setItem("auth-token", value);
    },
    async registerUser(userData: IRegisterInput) {
      console.log(userData);
      return await registerUserFn(userData).then((res) =>
        this.setToken(res.access_token)
      );
    },
    async loginUser(userData: ILoginInput) {
      return await loginUserFn(userData).then((res) =>
        this.setToken(res.access_token)
      );
    },
    async logoutUser() {
      this.setToken("");
      this.notes = [];
    },
    async fetchNotes() {
      this.notes = await getAllNotesFn(this.token);
      console.log(this.notes);
      this.isLoaded = true;
      return this.notes;
    },

    async addNote(noteData: INote) {
      const newNote = await createNewNoteFn(noteData, this.token);
      this.notes.push(newNote);
    },

    async deleteNote(id: string) {
      const res = await deleteNoteFn(id, this.token);
      if (!res) throw new Error("Failed to delete note");
      const index = this.notes.findIndex((n) => n._id === id);
      if (index !== -1) this.notes.splice(index, 1);
    },

    async updateNote(updatedNote: IUpdatedNote) {
      return await updateNoteFn(updatedNote, this.token).then((response) => {
        const index = this.notes.findIndex((n) => n._id === updatedNote._id);
        this.notes[index] = response;
      });
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
});
