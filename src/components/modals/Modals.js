import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectModal } from "../../redux/slices/modal/selectors";
import { ContactUsModal } from "./ContactUs/ContactUsModal";
import {
  togleContactUsModal,
  togleSignInModal,
  togleSignUpModal,
} from "../../redux/slices/modal/slice";
import { SignUpModal } from "./SignUp/SignUpModal";
import { SignInModal } from "./SignIn/SignInModal";

export const Modals = () => {
  const dispatch = useDispatch();

  const HandleClose = (modal) => {
    dispatch(modal(false));
  };

  const { openSignInModal, openSignUpModal, openContactUsModal } =
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
    </>
  );
};
