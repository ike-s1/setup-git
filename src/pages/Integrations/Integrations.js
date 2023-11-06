import React from "react";
import "./Integrations.scss";

import discordLogo from "../../resources/integrations/discord logo.png";
import wordpressLogo from "../../resources/integrations/WP logo.png";
import shopifyLogo from "../../resources/integrations/shopify logo.png";
import telegramLogo from "../../resources/integrations/telegram logo.png";
import zapierLogo from "../../resources/integrations/zapier logo.png";
import slackLogo from "../../resources/integrations/slack logo.png";
import arrowRight from "../../resources/arrow.png";


export const Integrations = () => {
  return (
    <div className="integrations-wrapper">
      <div className="active-integrations">
        <div className="integration-item">
          <div className="item-content">
            <div className="item-image-block">
              <img src={discordLogo} alt="discorsLogo" />
            </div>
            <div className="item-add-block">
              <div>Add to Discord</div>
              <img  src={arrowRight} alt={'arrow'}/>
            </div>
          </div>
        </div>
        <div className="integration-item">
          <div className="item-content">
            <div className="item-image-block">
              <img  src={wordpressLogo} alt="wordpresslogo"/>
            </div>
            <div className="item-add-block">
              <div>Add to Wordpress</div>
              <img src={arrowRight} alt={'arrow'} />
            </div>
          </div>
        </div>
      </div>
      <div className="comming-integrations">
        <div className="integration-item">
          <div className="item-content">
            <div className="item-image-block">
              <img  src={shopifyLogo} alt="shopifyLogo" />
            </div>
            <div className="item-add-block">
              <span>Coming soon</span>
            </div>
          </div>
        </div>
        <div className="integration-item">
          <div className="item-content">
            <div className="item-image-block">
              <img  src={telegramLogo} alt={'telegramLogo'}/>
            </div>
            <div className="item-add-block">
              <span>Coming soon</span>
            </div>
          </div>
        </div>
        <div className="integration-item">
          <div className="item-content">
            <div className="item-image-block">
              <img  src={zapierLogo} alt={'zapierLogo'}/>
            </div>
            <div className="item-add-block">
              <span>Coming soon</span>
            </div>
          </div>
        </div>
        <div className="integration-item">
          <div className="item-content">
            <div className="item-image-block">
              <img src={slackLogo}  alt={'slackLogo'} />
            </div>
            <div className="item-add-block">
              <span>Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
