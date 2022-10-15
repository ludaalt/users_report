import users from '../users.json';

export const getData = async () => {
  if (process.env.REACT_APP_BASE_URL) {
    const response = await fetch(process.env.REACT_APP_BASE_URL);
    const data = await response.clone().json();

    return data;
  } else {
    return users;
  }
};
