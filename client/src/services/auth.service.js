import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  login() {}
  logout() {}
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }
  getCurrentUser() {}
}

export default new AuthService();
