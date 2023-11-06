import React from "react";
import "./DataRange.scss";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const DataRange = ({ data, setData, setShowDataPicker }) => {
  const handleDateRangeChange = (ranges) => {
    const bothDatesSelected =
      ranges.selection.startDate &&
      ranges.selection.endDate &&
      ranges.selection.endDate !== ranges.selection.startDate;

    if (bothDatesSelected) {
      setShowDataPicker(false);
    }

    setData([ranges.selection]);
  };

  return (
    <div>
      <DateRangePicker
        onChange={handleDateRangeChange}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={data}
        direction="horizontal"
      />
    </div>
  );
};
