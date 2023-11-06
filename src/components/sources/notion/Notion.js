import React from "react";
import CustomButton from "../../Shared/CustomBtn/CustomBtn";
import './Notion.scss';

export const Notion = () => {
  return (
    <div className="upload-notion-wrapper">
      <div className="notion-connect-container border-container">
        <CustomButton dark={true}>
          <a href="https://api.notion.com/v1/oauth/authorize?client_id=ea85e09c-a02a-41f1-b32e-f994865ff886&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F">
            Login Notion
          </a>
        </CustomButton>
      </div>
    </div>
  );
};
