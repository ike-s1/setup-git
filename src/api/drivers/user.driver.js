import axios from "axios";

import { to } from "../../helpers/api.helper";

export const user = {
 getSetings: ({ token }) => {
    return  axios.get(to(`/ser/settings`));

  },
  setSettings: ({ token, notifications, dark_mode, language }) => {
    return (
      axios.post(to("user/settings")),
      {
        notifications,
        dark_mode,
        language
      }
    );
  },
};
