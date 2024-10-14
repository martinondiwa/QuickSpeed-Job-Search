import React from "react";
import Button from "./Button";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleClick} value="Hourly" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>
        <InputField handleChange={handleChange} value="london" title="London" name="location" />
      </div>
    </div>
  );
};

export default Salary;
