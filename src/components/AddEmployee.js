import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addEmployeeAction } from "../redux/action";
import { useDispatch } from "react-redux";

const AddEmployee = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    await dispatch(addEmployeeAction(state));
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

export default AddEmployee;
