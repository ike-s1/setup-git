import { configureStore } from "@reduxjs/toolkit";
import chatbotReducer from "./slices/chatbot/slice";
import modalReducer from "./slices/modal/slice";
import userReducer from "./slices/user/slice";
import authReducer from "./slices/auth/slice";

export const store = configureStore({
  reducer: {
    chatbot: chatbotReducer,
    modal: modalReducer,
    user: userReducer,
    auth: authReducer,
  },
});
