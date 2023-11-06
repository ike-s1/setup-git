import { SERVER_ENDPOINT } from "../constants/endpoints.constants";

export const to = (path) => {
    return `${SERVER_ENDPOINT}/${path}`;
};

