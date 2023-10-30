import React, { useState } from "react";
import "./Pricing.scss";
import CustomButton from "../../../components/shared/CustomBtn";
import check from "../../../resources/icons/check.svg";
import checkBlack from "../../../resources/icons/check-black.svg";

const pricingPlans = ["monthly", "yearly"];
const freePlanFeatures = [
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
]
const smallPlanFeatures = [
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
]
const enterprisePlanFeatures = [
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
]

export const Pricing = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section id="pricing" className="pricing-section">
      <div className="ellipse-one"></div>
      <div className="ellipse-two"></div>
      <div className="pricing-content">
        <h2 className="pricing-title title">Pricing plan</h2>
        <p className="pricing-subtitle">
          Get 2 months for free by subscribing yearly!
        </p>
        <div className="pricing-switch-block">
          {pricingPlans.map((e) => (
            <div
              className={`pricing-switch-item ${e === plan ? "active" : ""}`}
              onClick={() => setPlan(e)}
              key={e}
            >
              {e}
            </div>
          ))}
        </div>
        <div className="pricing-block">
          <div className="pricing-item free">
            <div className="pricing-item-content">
              <div className="pricing-item-name">
                <span>Startup plan</span>
              </div>
              <div className="pricing-info-block">
                <div className="price-block">
                  <p className="price">Free</p>
                </div>
                <CustomButton >Get started</CustomButton>
              </div>
              <div className="features-block">
                {freePlanFeatures.map( f => {
                  return  <div className="feature-item">
                  <img src={checkBlack} alt="check" />
                  <p>{f}</p>
                </div>
                })}               
              </div>
            </div>
          </div>
          <div className="pricing-item small ">
            <div className="pricing-item-content">
              <div className="pricing-item-name">
                <span>Small Business plan</span>
              </div>
              <div className="pricing-info-block">
                <div className="price-block">
                  <p className="price">
                    $29<span>/mo</span>
                  </p>
                  <span className="price-subtitle">or $299 yearly</span>
                </div>
                <CustomButton >Get started</CustomButton>
              </div>
              <div className="features-block">
              {smallPlanFeatures.map( f => {
                  return  <div className="feature-item">
                  <img src={check} alt="check" />
                  <p>{f}</p>
                </div>
                })}  
              </div>
            </div>
          </div>

          <div className="pricing-item enterprise">
            <div className="pricing-item-content">
              <div className="pricing-item-name">
                <span>Enterprise plan</span>
              </div>
              <div className="pricing-info-block">
                <div className="price-block">
                  <p className="price">
                    $49<span>/mo</span>
                  </p>
                  <span className="price-subtitle">or $499 yearly</span>
                </div>
                <CustomButton>Get started</CustomButton>
              </div>
              <div className="features-block">
              {enterprisePlanFeatures.map( f => {
                  return  <div className="feature-item">
                  <img src={checkBlack} alt="check" />
                  <p>{f}</p>
                </div>
                })}  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
