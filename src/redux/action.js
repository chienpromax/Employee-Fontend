import * as actionType from "./actionType";
import API from '../proxy/API';

export function getAvailableEmployee(employee){
    return {
        type: actionType.employeeType.GET,
        payload: employee
    }
}

export function getEmployeeAction(){
    return dispatch => {
        API.getEmployee().then(res => {
            dispatch(getAvailableEmployee(res.data));
            console.log('Data Fetched From The DB' + JSON.stringify(res.data));
        }).catch(error => {
            console.error('Encountered err while fectching data '+ error);
        })
    };
}