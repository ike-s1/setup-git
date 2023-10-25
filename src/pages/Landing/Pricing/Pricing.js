import React, { useState } from "react";
import "./Pricing.scss";
import CustomButton from "../../../components/shared/CustomBtn";
import check from "../../../resources/icons/check.png";

const pricingPlans = ["monthly", "yearly"];

export const Pricing = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section id="pricing" className="pricing-section">
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
                <CustomButton animated={true}>Get started</CustomButton>
              </div>
              <div className="features-block">
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
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
                <CustomButton animated={true}>Get started</CustomButton>
              </div>
              <div className="features-block">
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
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
                <CustomButton animated={true}>Get started</CustomButton>
              </div>
              <div className="features-block">
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
                <div className="feature-item">
                  <img src={check} alt="arrow" />
                  <p>Feature text goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
