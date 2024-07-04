import axios from "axios";

const API_URL = "http://localhost:3000/posts";

export const getTodos = async () => {
  const res = await axios.get(API_URL);
  const data = await res.data;
  return res.data;
};

export const addTodo = async (todo) => {
  const res = await axios.post(API_URL, todo);
  const data = await res.data;
  return res.data;
};

export const updateTodo = async (id, updatedTodo) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedTodo);
  const data = await res.data;
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  const data = await res.data;
  return res.data;
};
