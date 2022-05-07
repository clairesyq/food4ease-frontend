import { url } from "./localhost";
import { getSessionToken, setSessionToken } from "./token"

const success = (value) => {
  return new Promise((resolve) => {
    resolve(value);
  });
};

const failure = (value) => {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};


export const register = async (email, username, password, role) => {
  return fetch(`${url}authenticate/`,
    {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: role
      })
    }).then(res => res.json())
    .then(async data => {
      console.log(data);
      if (data.error) {
        return failure(data)
      }
      else {
        await setSessionToken(data.auth_token);
        return success(data)

      }
    })
};

export const login = async (email, password) => {
  return fetch(`${url}authenticate/`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json())
    .then(async data => {
      if (data.error) {
        return failure(data)
      }
      else {
        await setSessionToken(data.auth_token);
        return success(data)

      }
    })
};


export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    getSessionToken().then((res) => {
      console.log(res)
      if (res !== null) {
        resolve(true);
      } else {
        resolve(false);
      }
    })
      .catch((err) => reject(err));
  });
};


