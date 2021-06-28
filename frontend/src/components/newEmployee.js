import React ,{ useEffect, Fragment}from 'react';
import {Button, Bordering} from './HeaderElements';
import {EList, Stack, Div} from './ListEmpEle';


import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../actions/employeeActions';
import { Link } from 'react-router-dom';


const newEmployee = () => {
    return (
        <div>
            
        </div>
    )
}

export default newEmployee
