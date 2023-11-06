import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSignInModal: false,
  openSignUpModal: false,
  openContactUsModal: false,
  openEmbedModal: false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    togleSignInModal(state, action) {
      state.openSignInModal = action.payload;
    },
    togleSignUpModal(state, action) {
      state.openSignUpModal = action.payload;
    },
    togleContactUsModal(state, action) {
      state.openContactUsModal = action.payload;
    },
    togleEmbedModal(state,action) {
      state.openEmbedModal = action.payload;
    }
  },
});

export const { togleSignInModal, togleSignUpModal, togleContactUsModal, togleEmbedModal} =
  modalSlice.actions;

export default modalSlice.reducer;
