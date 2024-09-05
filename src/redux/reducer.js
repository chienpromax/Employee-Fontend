import initialState from "./initialState";
import { combineReducers } from "redux";
import * as actionTypes from "./actionType";

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.employeeType.GET: {
      return {
        ...state,
        employees: action.payload,
      };
    }

    case actionTypes.employeeType.POST: {
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    }

    case actionTypes.employeeType.DELETE: {
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  employee: employeeReducer,
});
