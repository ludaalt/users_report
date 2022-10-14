export const getData = async () => {
  const response = await fetch(process.env.REACT_APP_BASE_URL);
  const data = await response.clone().json();
  return data;
};
