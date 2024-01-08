import http from "../http-common";
import Blog from "../types/Blog";
import authHeader from "../helper/AuthHeader";
import {BlogCreatePayload} from "../types/BlogCreatePayload";

const getAll = () => {
  return http.get("/blogs", {headers: authHeader()});
}

const get = (id: number) => {
  return http.get(`/blogs/${id}`, {headers: authHeader()});
}

const create = (blog: BlogCreatePayload, userId: number) => {
  return http.post(`/users/${userId}/blogs`, blog, {headers: authHeader()});
}

const update = (id: number, blog: Blog) => {
  return http.put(`/blogs/${id}`, blog, {headers: authHeader()});
}

const remove = (id: number) => {
  return http.delete(`/blogs/${id}` ,{headers: authHeader()});
}

const removeAll = () => {
  return http.delete(`/blogs`, {headers: authHeader()});
}

const BlogService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default BlogService;
