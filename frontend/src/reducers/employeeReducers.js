import { ALL_EMPLOYEES_REQUIREST, ALL_EMPLOYEES_SUCCESS, ALL_EMPLOYEES_FAIL, CLEAR_ERRORS, 
    NEW_EMPLOYEES_REQUIREST, NEW_EMPLOYEES_SUCCESS, NEW_EMPLOYEES_FAIL
} from '../constants/employeeConstant';
export const employeReducer = ( state = { employees:[] }, action)=>{
    switch(action.type){
        
        case ALL_EMPLOYEES_REQUIREST:
            return {
                loading: true,
                employees: []
            }
            case ALL_EMPLOYEES_SUCCESS:
            return {
                loading: false,
                employees: action.payload.employee,
                productsCount: action.payload.count
            }

            case ALL_EMPLOYEES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        
        default:
            return state;
    }


}
export const newEmployeReducer = ( state = { employees:{} }, action)=>{
    switch(action.type){
        
        case NEW_EMPLOYEES_REQUIREST:
            return {
                loading: true,
                employees: []
            }
            case NEW_EMPLOYEES_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                employees: action.payload.employee,
                
            }

            case NEW_EMPLOYEES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        
        default:
            return state;
    }


}