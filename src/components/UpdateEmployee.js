import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import API from "../proxy/API"

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [state, setState] = useState({
    id: id,
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    API.getEmployeeById(id).then((res) => {
      let employee = res.data;
      setState({
        id: employee.id,
        firstname: employee.firstname,
        lastname: employee.lastname,
        email: employee.email,
      });
    });
  }, [id]);
  

  const cancel = () => {
    navigate("/");
  };

  const handleFirstname = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      firstname: value,
    });
  };

  const handleLastname = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      lastname: value,
    });
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      email: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await API.updateEmployee(state.id, state);
    setState({
      firstname: "",
      lastname: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="col-md-6 m-auto">
        <div className="card">
          <div className="card-header">
            <h4 className="text-center">Register Employee</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="firstname">First Name</label>
                <input
                  onChange={handleFirstname}
                  value={state.firstname}
                  id="firstname"
                  type="text"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastname">Last Name</label>
                <input
                  onChange={handleLastname}
                  value={state.lastname}
                  id="lastname"
                  type="text"
                  className="form-control"
                  required
                ></input>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleEmail}
                  value={state.email}
                  id="email"
                  type="email"
                  className="form-control"
                  required
                ></input>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                onClick={cancel}
                type="button"
                className="btn btn-danger ms-3"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
