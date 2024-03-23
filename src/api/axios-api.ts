import axios from "axios";
import type {
  ILoginInput,
  ILoginResponse,
  IRegisterInput,
  IRegisterResponse,
} from "./types";
import type { INote, IUpdatedNote } from "@/interfaces/notes";

const BASE_URL = "http://localhost:5000";

const notesApi = axios.create({
  headers: {
    // "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": true,
    // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  },
  baseURL: BASE_URL,
  withCredentials: true,
});

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// authApi.defaults.headers.common["Content-Type"] = "application/json";

export const registerUserFn = async (user: IRegisterInput) => {
  const response = await notesApi.post<IRegisterResponse>("register", user);
  return response.data;
};

export const loginUserFn = async (user: ILoginInput) => {
  console.log("login method");
  const response = await notesApi.post<ILoginResponse>("login", user);
  return response.data;
};

export const getAllNotesFn = async (token: string | null) => {
  return await notesApi
    .get("notes", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status === 403) {
        localStorage.setItem("auth-token", "");
      }
    });

  // console.log(response);
  // return response;
};

export const createNewNoteFn = async (note: INote, token: string | null) => {
  const response = await notesApi.post("notes", note, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteNoteFn = async (id: string, token?: string | null) => {
  if (!token) throw new Error("No Token Provided!");
  const res = await notesApi.delete(`notes/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const updateNoteFn = async (
  updatedData: IUpdatedNote,
  token?: string | null
) => {
  const res = await notesApi.patch(
    `notes/${updatedData._id}`,
    { title: updatedData.title, content: updatedData.content },
    {
      headers: {
        Authorization: `Bearer ${token || localStorage.getItem("token")}`,
      },
    }
  );
  return res.data;
};
