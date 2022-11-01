export const refreshToken = () => {
  const refresh = localStorage.getItem("refresh");

  return fetch("https://studapi.teachmeskills.by/auth/jwt/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh }),
  });
};
