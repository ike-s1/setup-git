import React, { useState } from "react";
import "./Files.scss";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, setFiles } from "../../../redux/slices/chatbot/slice";
import { UploadedList } from "../../shared/UploadedList/UploadedList";
import { selectChatbot } from "../../../redux/slices/chatbot/selectors";

const fileTypes = ["PDF", "DOC", "CSV", "CODE", "MDX", "LOCAL", "TXT"];

function UploadIcon({ className }) {
  return (
    <div className={`${className}`}>
      <svg
        fill="none"
        viewBox="0 0 32.6569 30"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
      >
        <path
          id="Vector_2"
          d="M8.2419,21.055c-10.215,1.135 -9.08,-11.35 0,-10.215c-3.405,-12.485 15.89,-12.485 14.755,-3.405c11.35,-3.405 11.35,14.755 1.135,13.62M10.5119,16.515l5.675,-4.54M16.1869,11.975l5.675,4.54M16.1869,11.975v17.025"
          stroke="#1844DF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        />
      </svg>
    </div>
  );
}

export const Files = () => {
  const dispatch = useDispatch();
  const { files } = useSelector(selectChatbot);
  const [file, setFile] = useState([]);

  // const addFile = async (type, file) => {
  //   try {
  //     let test = await Api.chat.addFile({
  //       data_type: type,
  //       file: file,
  //     });
  //     console.log(test);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const addData = async (type, data) => {
  //   try {
  //     let test = await Api.chat.addData({
  //       data_type: type,
  //       url_or_text: data,
  //       instructions: "string",
  //     });
  //     console.log(test);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
const handleDeleteFile = (name) => {
  dispatch(deleteFile(name));
}
  
  const handleUploadChange = async  (file) => {
    setFile((prev) => [...prev, ...file]);

    dispatch(setFiles(file));
  };

  return (
    <div className="upload-files-wrapper border-container">
      <div className="upload-files-container">
        <div className="upload-file-content">
          <div className="file-uplaoder">
            <FileUploader
              multiple={true}
              handleChange={handleUploadChange}
              name="file"
              types={fileTypes}
            >
              <div className={`uploader-content`}>
                <UploadIcon className="upload-icon" />
                <p className={`upload-info`}>
                  <span className={`upload-text`}>
                    Drag &amp; Drop files here, or click to select files
                    <br />
                  </span>
                  <span className={`upload-supported`}>
                    {" "}
                    Supported file types: .pdf, .doc, .docx, .txt
                  </span>
                </p>
              </div>
            </FileUploader>
          </div>
        </div>
        <UploadedList
          list={files}
          title={"Attached Files"}
          onDeleteIconClick={(fl) => handleDeleteFile(fl.name)}
        />
      </div>
    </div>
  );
};
