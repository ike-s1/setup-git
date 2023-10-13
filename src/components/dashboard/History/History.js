import React from "react";
import './History.scss';
import CustomButton from "../../shared/CustomBtn";

export const History = () => {
  return (
    <div className="history-wrapper">
      <div className="history-header-container">
        <div className="history-header-content">
          <p>Source: //source name//</p>
          <CustomButton dark={true}> Export </CustomButton>
        </div>
      </div>
    </div>
  );
};
