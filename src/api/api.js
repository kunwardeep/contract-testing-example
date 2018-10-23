const axios = require('axios');
const serverAddr = 'https://api.github.com';

const http = axios.create({
  baseURL: serverAddr,
  headers: { 'content-type': 'application/json' }
});

class GithubApi {
  static async getAllUsers() {
    try {
      const response = await http.get(`/users`)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }

  static async getUserDetails(userLogin) {
    try {
      const response = await http.get(`/users/${userLogin}`)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
}

export default GithubApi;
