import axios from "axios";

import { to } from "../../helpers/api.helper";

export const dashboard = {
  history: ({ token, id }) => {
    return axios.post(to(`dashboard/${id}`), {
      question,
    });
  },
  leads: ({ token, id }) => {
    return axios.post(to(`dashboard/${id}`), {
      question,
    });
  },
};
