import axios from "axios";

import { to } from "../../helpers/api.helper";

export const chat = {
  addData: ({ data_type, url_or_text, instructions }) => {
    return axios.post(to("add"), {
      data_type,
      url_or_text,
      instructions,
    });
  },
  addFile: ({ data_type, file }) => {
    
    const body = new FormData();
    
    body.append("file", file);

    return axios.post(
      to(`add_file?data_type=${data_type}`), body,
      { headers: { 'Content-Type': `multipart/form-data`} }
    );
  },
  query: ({ question }) => {
    return axios.post(to("query"), {
      question,
    });
  },
  chat: ({ question }) => {
    return axios.post(to("chat"), {
      question,
    });
  },
};
