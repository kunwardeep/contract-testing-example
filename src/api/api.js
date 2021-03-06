const axios = require('axios');
const serverAddr = process.env.REACT_APP_SERVER === 'local' ? 'http://localhost:5050' : 'https://api.github.com';

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

  static async getUserDetail(userLogin) {
    try {
      const response = await http.get(`/users/${userLogin}`)
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
}

export default GithubApi;
