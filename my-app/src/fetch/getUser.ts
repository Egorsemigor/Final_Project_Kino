import { tmsFetch } from "./tmsFetch";

export const getUser = () => {
  return tmsFetch("https://studapi.teachmeskills.by/auth/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
