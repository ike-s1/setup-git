import React, { useEffect, useRef, useState } from "react";
import CustomTabs from "../../components/Shared/CustomTabs/CustomTabs";
import { Route, Routes } from "react-router-dom";
import "./Dashboard.scss";
import { CustomSelect } from "../../components/Shared/CustomSelect/CustomSelect";
import { DataRange } from "../../components/Shared/DataRange/DataRange";
import { addDays } from "date-fns";
import { CustomInput } from "../../components/Shared/CustomInput/CustomInput";
import { History } from "../../components/Dashboard/History/History";
import { Leads } from "../../components/Dashboard/Leads/Leads";

export const Dashboard = () => {
  const [source, setSource] = useState("Source");
  const [showDataPicker, setShowDataPicker] = useState(false);
  const [data, setData] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const dateRangeWrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dateRangeWrapperRef.current &&
      !dateRangeWrapperRef.current.contains(event.target)
    ) {
      setShowDataPicker(false);
    }
  };

  const handleInputFocus = () => {
    setShowDataPicker(true);
  };

  const changeDateFormat = () => {
    const startDate = new Date(data[0].startDate);
    const endDate = new Date(data[0].endDate);
    const formattedStartDate = `${startDate.getFullYear()}-${(
      startDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${startDate.getDate().toString().padStart(2, "0")}`;
    const formattedEndDate = `${endDate.getFullYear()}-${(
      endDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${endDate.getDate().toString().padStart(2, "0")}`;

    return `${formattedStartDate} -- ${formattedEndDate}`;
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="side-block">
        <CustomTabs
          items={[
            {
              label: "History",
              link: "/chatbot/dashboard/history",
            },
            {
              label: "Leads",
              link: "/chatbot/dashboard/leads",
            },
          ]}
        />
        <div className="dashboard-selectors">
          <div className="data-range-wrapper" ref={dateRangeWrapperRef}>
            <CustomInput
              value={changeDateFormat()}
              onChange={null}
              onFocus={handleInputFocus}
            />
            {showDataPicker && (
              <DataRange
                data={data}
                setData={setData}
                setShowDataPicker={setShowDataPicker}
              />
            )}
          </div>
          <CustomSelect
            options={[{ value: "Source", label: "test" }]}
            value={source}
            onChange={setSource}
          />
        </div>
        <div className="dashboard-history-messenger">
          <div className="history-question-container active">
            <div className="history-question-content">
              <div className="history-question-header">
                <span className="question">//</span> <span className="time">Just now</span>
              </div>
              <p></p>
            </div>
          </div>
          <div className="history-question-container ">
            <div className="history-question-content">
              <div className="history-question-header">
                <span className="question">///</span> <span className="time">13 min ago</span>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-content  border-container">
        <div className="dashboard-main">
          <Routes>
            <Route path="/history" element={<History/>} />
            <Route path="/leads" element={<Leads/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
