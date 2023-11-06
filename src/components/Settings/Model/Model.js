import React, { useState } from "react";
import "./Model.scss";
import CustomButton from "../../Shared/CustomBtn/CustomBtn";
import Slider from '@mui/material/Slider';
import { CustomInput } from "../../Shared/CustomInput/CustomInput";
import { CustomSelect } from "../../Shared/CustomSelect/CustomSelect";

export const Model = () => {
  const [basePrompt, setBasePtompt] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis velit et magna ullamcorper, ac sollicitudin nunc tincidunt. Aenean tincidunt orci vel velit pharetra vehicula. Aliquam lobortis ipsum in risus maximus, non pharetra lacus varius. Donec semper luctus magna, vel mattis sapien tristique ac."
  );
  const [temperature, setTemperature] = useState(0.7);
  const [model, setModel] = useState();

  console.log(temperature)

  return (
    <div className="model-wrapper">
      <div className="model-prompt-container">
        <div className="model-prompt-content">
          <p>Base prompt (system message)</p>
          <textarea
            value={basePrompt}
            onChange={(e) => setBasePtompt(e.target.value)}
          />
          <p className="prompt-output">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            facilisis velit et magna ullamcorper, ac sollicitudin nunc
            tincidunt.
          </p>
          <CustomButton>Save</CustomButton>
        </div>
      </div>
      <div className="model-settings-container">
        <div className="model-settings-content">
          <div className="model-version-block">
            <p>Model</p>
            <CustomSelect
            options={[{ value: "Gpt - 3,5 - turbo", label: "Gpt - 3,5 - turbo" }]}
            value={model}
            onChange={setModel}
          />
            <p className="model-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              facilisis velit et magna ullamcorper, ac sollicitudin nunc
              tincidunt.
            </p>
          </div>
          <div className="model-temperature-block">
            <p>Temperature</p>
            <div className="temperature-range">
              <span>0</span>
              <span>1</span>
            </div>
            <Slider
              aria-label="Temperature"
              step={0.1}
              max={1}
              min={0}
              value={temperature} 
              onChange={(e) => setTemperature(e.target.value)}
              valueLabelDisplay="auto"
              color="secondary"
            />
            <div className="temperature-info">
              <span>Reserve</span>
              <span>Creative</span>
            </div>
          </div>
          <CustomButton>Save</CustomButton>
        </div>
      </div>
    </div>
  );
};
