export const activateUser = (uid: string, token: string) => {
  return fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
    method: "POST",
    body: JSON.stringify({ uid, token }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};
