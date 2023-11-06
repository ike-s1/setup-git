import axios from "axios";

import { to } from "../../helpers/api.helper";

export const chatbot = {
  conversationsHistory: ({ token, id }) => {
    return axios.get(to(`conversations/${id}`));
  },
  getSettings: ({ token, id }) => {
    return axios.get(to(`chatbot/settings/${id}`), {
      headers: {
        'token': token
      }
    });
  },
  setSettings: ({
    token,
    id,
    name,
    characters,
    base_prompt,
    temperature,
    intro_message,
    suggested_messages,
  }) => {
    return axios.post(to(`chatbot/settings/${id}`), {
      name,
      characters,
      base_prompt,
      temperature,
      intro_message,
      suggested_messages,
    });
  },
};
