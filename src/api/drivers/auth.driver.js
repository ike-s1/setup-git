import axios from "axios";

import { to } from "../../helpers/api.helper";

export const auth = {
  signup: ({ email, password }) => {
    return (
      axios.post(to("signup")),
      {
        email,
        password,
      }
    );
  },
  googleSignin: ({  }) => {
    return ''
  }
};
