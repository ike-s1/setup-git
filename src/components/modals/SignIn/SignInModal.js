import React  from "react";
import "./SignInModal.scss";
import CustomButton from "../../shared/CustomBtn";
import Rodal from "rodal";
import closeIcon from "../../../resources/icons/🦆 icon _cancel_.png";
import { CustomInput } from "../../shared/CustomInput/CustomInput";
import { GoogleLogin } from "@react-oauth/google";

export const SignInModal = ({ visible, handleClose }) => {
  return (
    <Rodal
      visible={visible}
      onClose={handleClose}
      showCloseButton={false}
      className="signIn-modal-box"
      animation="fade"
      duration={500}
      closeOnEsc={true}
    >
      <div className="signIn-modal">
        <h2 className="signIn-modal-title"> Log in</h2>
        <div className="google-signIn">
          <GoogleLogin
            onSuccess={null}
            onFailure={null}
            size="large"
          />
        </div>
        <div className="signIn-modal-form">
          <p>Email address</p>
          <CustomInput placeholder={"Your email address"} />
          <p>Your Password</p>
          <CustomInput placeholder={"Your password"} />
        </div>
        <CustomButton> Sign in </CustomButton>
        <div className="singIn-links">
        <p>Send a magic link email</p>
        <p>Forgot your password?</p>
        <p>Don’t have an account? Sign up</p>
        </div>
        <img
          src={closeIcon}
          onClick={handleClose}
          className="close-icon"
          alt="closeIcon"
        />
      </div>
    </Rodal>
  );
};
