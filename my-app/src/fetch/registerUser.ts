export const registerUser = (
  username: string,
  email: string,
  password: string
) => {
  const body = {
    username: username,
    email: email,
    password: password,
  };
  return fetch("https://studapi.teachmeskills.by/auth/users/", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
