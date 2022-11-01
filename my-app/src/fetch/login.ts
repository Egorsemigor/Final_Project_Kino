export const login = (email: string, password: string) => {
  return fetch(`https://studapi.teachmeskills.by/auth/jwt/create/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
