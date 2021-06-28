import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { employeReducer, newEmployeReducer } from './reducers/employeeReducers';




const reducer = combineReducers({
    employees: employeReducer,
    newEmployee: newEmployeReducer
})

let initilState = {

}


const middlware = [thunk];

const store = createStore(reducer, initilState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;

