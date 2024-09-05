import axios from "axios";

const BASE_URL = "http://localhost:8080/employee/api";

class API {
  getEmployee() {
    return axios.get(`${BASE_URL}/employees`);
  }
  
  addEmployee(requestData) {
    return axios.post(`${BASE_URL}/add-employee`, requestData);
  }

  updateEmployee(id, employeeData) {
    return axios.put(`${BASE_URL}/employee/${id}`, employeeData);
  }

  getEmployeeById(id) {
    return axios.get(`${BASE_URL}/employee/${id}`);
  }

  deleteEmployeeById(id) {
    return axios.delete(`${BASE_URL}/employee/${id}`);
  }
}

const apiInstance = new API();

export default apiInstance;
