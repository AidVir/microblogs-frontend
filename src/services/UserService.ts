import http from "../http-common";
import authHeader from "../helper/AuthHeader";

const getPublicContent = () => {
  return http.get("/all");
}

const getUserContent = () => {
  return http.get("user", {headers: authHeader()});
}

const UserService = {
  getPublicContent,
  getUserContent,
};

export default UserService;
