import {AxiosResponse} from "axios";
import http from "../http-common";


class AuthService {
  login(username: string, password: string): Promise<any> {
    return http.post("/auth/signin", {username, password})
    .then((response: AxiosResponse) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userId", response.data.id)
      }

      return response.data;
    });
  }

  logout(): void {
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
  }

  register(username: string, password: string): Promise<any> {
    return http.post("/auth/signup", {username, password});
  }

  getCurrentUser(): any {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  }
}

export default new AuthService();

