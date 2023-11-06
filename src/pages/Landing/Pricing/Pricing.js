import React, { useState } from "react";
import "./Pricing.scss";
import CustomButton from "../../../components/Shared/CustomBtn/CustomBtn";
import check from "../../../resources/icons/check.svg";
import checkBlack from "../../../resources/icons/check-black.svg";

const MONTHLY = "MONTHLY";
const YEARLY = "YEARLY";

const pricingPlans = [MONTHLY, YEARLY];
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


const SMALL_MO_PRICE = 29;
const ENT_MO_PRICE = 49;
const SMALL_YEAR_PRICE = 299;
const ENT_YEAR_PRICE = 499;


export const Pricing = () => {
  const [plan, setPlan] = useState(MONTHLY);

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
                    ${plan === MONTHLY ? SMALL_MO_PRICE : SMALL_YEAR_PRICE}<span>{plan === MONTHLY ? '/mo' : '/year'}</span>
                  </p>
                  <span className="price-subtitle">or {plan === MONTHLY ? `$${SMALL_YEAR_PRICE} yearly` :  `$${SMALL_MO_PRICE} monthly`} </span>
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
                  ${plan === MONTHLY ? ENT_MO_PRICE : ENT_YEAR_PRICE}<span>{plan === MONTHLY ? '/mo' : '/year'}</span>
                  </p>
                  <span className="price-subtitle">or {plan === MONTHLY ? `$${ENT_YEAR_PRICE} yearly` :  `$${ENT_MO_PRICE} monthly`} </span>
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
