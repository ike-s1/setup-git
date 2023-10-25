import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectModal } from "../../redux/slices/modal/selectors";
import { ContactUsModal } from "./ContactUs/ContactUsModal";
import {
  togleContactUsModal,
  togleEmbedModal,
  togleSignInModal,
  togleSignUpModal,
} from "../../redux/slices/modal/slice";
import { SignUpModal } from "./SignUp/SignUpModal";
import { SignInModal } from "./SignIn/SignInModal";
import { EmbedModal } from "./Embed/Embed";

export const Modals = () => {
  const dispatch = useDispatch();

  const HandleClose = (modal) => {
    dispatch(modal(false));
  };

  const { openSignInModal, openSignUpModal, openContactUsModal, openEmbedModal } =
    useSelector(selectModal);

  return (
    <>
      {!!openSignInModal && (
        <SignInModal
          visible={openSignInModal}
          handleClose={() => HandleClose(togleSignInModal)}
        />
      )}

      {!!openSignUpModal && (
        <SignUpModal
          visible={openSignUpModal}
          handleClose={() => HandleClose(togleSignUpModal)}
        />
      )}

      {!!openContactUsModal && (
        <ContactUsModal
          visible={openContactUsModal}
          handleClose={() => HandleClose(togleContactUsModal)}
        />
      )}
      {!!openEmbedModal && (
        <EmbedModal
          visible={openEmbedModal}
          handleClose={() => HandleClose(togleEmbedModal)}
        />
      )}
    </>
  );
};
