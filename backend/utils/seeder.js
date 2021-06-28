const EmployeeModel = require('../model/employeeModel');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const employees = require('../data/employeeData.json');

// setting doenv file

dotenv.config({path: 'backend/config.env'})


connectDatabase();

const seedEmployees = async() => {
    try{
        await EmployeeModel.deleteMany();
        console.log('Employees are deleted');

        await EmployeeModel.insertMany(employees)
        console.log('All Employeesa are added.')

        process.exit();
    }catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedEmployees();