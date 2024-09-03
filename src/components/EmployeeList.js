import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEmployeeAction } from "../redux/action";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEmployeeAction());
  }, [dispatch]);

  function addUser (){
    navigate("/add-employee");
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">Employees</h4>
          <button onClick={addUser} className="btn btn-primary">Add Employee</button>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No employees found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
