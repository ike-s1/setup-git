import React, { useState } from "react";
import "./SignUpModal.scss";
import CustomButton from "../../shared/CustomBtn";
import Rodal from "rodal";
import closeIcon from "../../../resources/icons/🦆 icon _cancel_.png";
import { CustomInput } from "../../shared/CustomInput/CustomInput";
import { GoogleLogin } from "@react-oauth/google";

export const SignUpModal  = ({ visible, handleClose }) => {

  return (
    <Rodal
      visible={visible}
      onClose={handleClose}
      showCloseButton={false}
      className="signUp-modal-box"
      animation="fade"
      duration={500}
      closeOnEsc={true}
    >
      <div className="signUp-modal">
        <h2 className="signUp-modal-title"> Log in</h2>
        <div className="google-signIn">
            <GoogleLogin
            onSuccess={null}
            onFailure={null}
            size="large"
          />
        </div>
        <div className="SignUp-modal-form">
          <p>Email address</p>
          <CustomInput placeholder={"Your email address"} />
          <p>Create Password</p>
          <CustomInput placeholder={"Create Password"} />
        </div>
        <CustomButton> Sign up </CustomButton>
        <p>Already have an account? Sign in</p>
        <p>Forgot your password?</p>
        <div>Check your email for the confirmation link</div>
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
