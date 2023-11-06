import React, { useState } from "react";
import "./Files.scss";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, setFiles } from "../../../redux/slices/chatbot/slice";
import { UploadedList } from "../../Shared/UploadedList/UploadedList";
import { selectChatbot } from "../../../redux/slices/chatbot/selectors";
import uploadIcon from "../../../resources/icons/upload.png";

const fileTypes = ["PDF", "DOC", "CSV", "CODE", "MDX", "LOCAL", "TXT"];


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
                <img className={"upload-icon"} src={uploadIcon} alt="icon"/>
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
