import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchUsersApi = async () => await axios.get(`${baseUrl}/users`);

export const createUserApi = async (user) =>
  await axios.post(`${baseUrl}/users`, user);

export const deleteUserApi = async (userId) =>
  await axios.delete(`${baseUrl}/users/${userId}`, userId);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`${baseUrl}/users/${userId}`, userInfo);
