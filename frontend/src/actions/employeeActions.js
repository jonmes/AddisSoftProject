import axios from 'axios';
import { ALL_EMPLOYEES_REQUIREST, ALL_EMPLOYEES_SUCCESS, ALL_EMPLOYEES_FAIL, CLEAR_ERRORS,
    NEW_EMPLOYEES_REQUIREST, NEW_EMPLOYEES_SUCCESS, NEW_EMPLOYEES_FAIL
} from '../constants/employeeConstant';


export const getEmployees = () =>  async(dispatch) => {
    try{
        dispatch({type: ALL_EMPLOYEES_REQUIREST});

        const { data } = await axios.get('/api/v1/employee');

        dispatch({
            type: ALL_EMPLOYEES_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: ALL_EMPLOYEES_FAIL,
            payload: error.response.data.message
        })
    }
}



export const createEmployee = (employeeData) =>  async(dispatch) => {
    try{
        dispatch({type: NEW_EMPLOYEES_REQUIREST});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put('/api/v1/addemployee', employeeData, config);

        dispatch({
            type: NEW_EMPLOYEES_SUCCESS,
            payload: data.success
        })

    }catch(error){
        dispatch({
            type: NEW_EMPLOYEES_FAIL,
            payload: error.response.data.message
        })
    }
}




// Clear Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}