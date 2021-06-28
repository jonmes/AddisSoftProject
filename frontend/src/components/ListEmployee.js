import React ,{ useEffect, Fragment}from 'react';
import {Button, Bordering} from './HeaderElements';
import {EList, Stack, Div} from './ListEmpEle';


import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../actions/employeeActions';
import { Link } from 'react-router-dom';



const ListEmployee = () => {

    const dispatch = useDispatch();

    const { loading, employees} = useSelector(state => state.employees)

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch])

    return (
        <Fragment>
        {loading? <h1>loading...</h1>: (
            <Fragment>

        <Bordering>
            <Stack>
                <Div>
                <Div className='id w5' style={{width: '20%', paddingLeft: '7rem'}}>ID</Div>
                <Div className='name w30' style={{width: '25%'}}>Name</Div>
                <Div className='dob w30' style={{width: '12%'}}>DOB</Div>
                <Div className='gender w5' style={{width: '4%', paddingRight:'2rem'}}>Gender</Div>
                <Div className='salary w10' style={{width: '10%'}}>Salary</Div>
                </Div>

                {employees && employees.map( employee => (
                    
                    <EList key={employee._id} >
                    <Div className='id w5' style={{width: '30%'}}>{employee._id}</Div>
                    <Div className='name w30' style={{width: '25%'}}>{employee.name}</Div>
                    <Div className='dob w30' style={{width: '20%'}}>{employee.dob}</Div>
                    <Div className='gender w5' style={{width: '7%', paddingLeft:'2rem'}}>{employee.gender}</Div>
                    <Div className='salary w10' style={{width: '7%'}}>{employee.salary}</Div>
                    <Div className='edit w10' style={{width: '10%'}}><Button><Link style={{textDecoration: 'none', color:'orange'}} to={`/employee/${employee._id}`}>Edit</Link></Button></Div>
                    <Div className="spacing w10" style= {{width: '2%'}}> </Div>
                    <Div className='remove w10' style={{width: '10%'}}><Button><Link style={{textDecoration: 'none', color:'orange'}} to={`/employee/${employee._id}`}>Edit</Link></Button></Div>
                    </EList>

                    ))}

              
            </Stack>
        </Bordering>
            </Fragment>
        )}
        </Fragment>
        
        
    )
}

export default ListEmployee
