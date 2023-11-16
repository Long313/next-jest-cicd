import api from "../utils/api";

export const registerUser = (url: string, params: any) => {
  return api({
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // userID: `${sectionID}`,
    },
    method: "POST",
    url: `/${url}`,
    data: {
      ...params,
    },
  });
};
export const login = (url: string, params: any) => {
  console.log("params", params);
  return api({
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // userID: `${sectionID}`,
    },
    method: "POST",
    url: `/${url}`,
    data: {
      ...params,
    },
  });
};
