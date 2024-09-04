import initialState from "./initialState";
import { combineReducers } from "redux";
import * as actionTypes from './actionType';

export default function employeeReducer (state = initialState, action) {
  switch (action.type) {

    case actionTypes.employeeType.GET: {
      return {
        ...state,
        employees: action.payload,
      }
    }

    case actionTypes.employeeType.POST: {
      return {
        ...state,
        employees: [...state.employee, action.payload]
      }
    }

    default:
      return state;
  }
}

export const rootRecucer = combineReducers({
  employee: employeeReducer,
});
