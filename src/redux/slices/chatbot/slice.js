import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "string",
  characters: 0,
  base_prompt: "string",
  temperature: 0,
  intro_message: "string",
  suggested_messages: [
    "string"
  ],
  files: [],
  text: "",
  qna: [],
  websites: [],
  notion: null,

};

export const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    setFiles(state, action) {
      state.files = [...state.files, ...action.payload];
    },
    deleteFile(state, action) {
      state.files = state.files.filter((f) => f.name !== action.payload);
    },
    deleteAllFiles(state) {
      state.files = [];
    },
    setText(state, action) {
      state.text = action.payload;
    },
    setQnA(state, action) {
      state.qna = [...state.qna, action.payload];
    },
    deleteQnA(state, action) {
      state.qna = state.qna.filter((q) => q.question !== action.payload);
    },
    deleteAllQnA(state, action) {
      state.qna = [];
    },
    setWebsites(state, action) {
      state.websites = [...state.websites, ...action.payload];
    },
    deleteWebsite(state, action) {
      state.websites = state.websites.filter((w) => w !== action.payload);
    },
    deleteAllWebsites(state) {
      state.websites = [];
    },
  },
});

export const {
  setFiles,
  setText,
  setQnA,
  setWebsites,
  deleteQnA,
  deleteAllQnA,
  deleteFile,
  deleteAllFiles,
  deleteWebsite,
  deleteAllWebsites
} = chatbotSlice.actions;

export default chatbotSlice.reducer;
