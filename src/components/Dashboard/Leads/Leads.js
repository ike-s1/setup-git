import React  from "react";
import './Leads.scss';
import CustomButton from "../../Shared/CustomBtn/CustomBtn";

export const Leads = () => {
  return (
    <div className="leads-wrapper">
      <div className="leads-header-container">
        <div className="leads-header-content">
          <p>Source: //source name//</p>
          <CustomButton dark={true}> Export </CustomButton>
        </div>
      </div>
    </div>
  );
};
