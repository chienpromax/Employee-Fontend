import axios from "axios";

const BASE_URL = "http://localhost:8080/employee/api";

class API {
  getEmployee() {
    return axios.get(BASE_URL + '/employees');
  }
}


const apiInstance = new API();

export default apiInstance;
