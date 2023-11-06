import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAllWebsites, setWebsites } from "../../../redux/slices/chatbot/slice";
import { CustomInput } from "../CustomInput/CustomInput";
import "./UploadedList.scss";
import deleteIcon from "../../../resources/chatbot/delete-icon.png";
import CustomButton from "../CustomBtn/CustomBtn";;


export const UploadedList = ({
  list,
  title,
  onDeleteIconClick,
  isEditable,
  addClick,
  type,
}) => { 
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [onAddMode, setAddMode] = useState(false);
  const [listToShow, setListToShow ] = useState(list);

  

  const handleDeleteInput = () => {
    setInputData("")
    setAddMode(false);
  }

  const handleAddClick = () => {
    if (onAddMode) {
      dispatch(setWebsites([inputData])); 
      setInputData("");
      setAddMode(false);
    }
    setAddMode(true);
  };

  const handleDeleteAll= () => {
    dispatch(deleteAllWebsites());
  };


useEffect(() => {
  if(type !== 'link') {
    const newFileInfoList = [];

    list.forEach((file) => {
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const content = e.target.result;
          const symbols = content.replace(/\s+/g, "").length;
          const fileInfo = {
            name: file.name,
            symbolsLength: symbols,
          };
          newFileInfoList.push(fileInfo);

          if (newFileInfoList.length === list.length) {
            setListToShow(newFileInfoList);
          }
        };

        reader.readAsText(file);
      }
    });
  }

  setListToShow(list)
}, [list])

  return (
    <div className="uploaded-list">
      <div className="list-title">
        <p>
          {title}
          <span>
            ({list?.length || 0} {type === "link" ? "links" : "files"})
          </span>
        </p>
        {isEditable && (
          <CustomButton onClick={handleAddClick} dark={true}>
            Add
          </CustomButton>
        )}
        {/* { type === 'link' && listToShow?.length > 0 && <span  on onClick={handleDeleteAll} className="delete-all">Delete all </span> }  */}
      </div>
      {isEditable && onAddMode && (
        <div className="add-url-container">
          <CustomInput
            onChange={(value) => setInputData(value)}
            placeholder={"https://www.example.com"}
            value={inputData}
          />
          <img  src={deleteIcon} onClick={handleDeleteInput} className="delete-icon"/>
        </div>
      )}
      {listToShow?.length > 0 && (
        <ul>
          {listToShow.map((fl) => (
            <li>
              <p>
                {`File Name - ${type === 'link' ? fl : fl.name}`}
                <span> ({ type === 'link' ? fl.length : fl.symbolsLength} chart)</span>
              </p>
              <img src={deleteIcon} onClick={() => onDeleteIconClick(fl)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
