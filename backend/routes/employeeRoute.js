const express = require('express');
const router = express.Router();

const { getEmployee, addEmployee, getSingleEmployee, updateEmployee, removeEmployee } = require('../controllers/employeeController')

// Get all Employees
router.route('/employee').get(getEmployee );

// Get single Employee
router.route('/employee/:id').get(getSingleEmployee);


// Add Employee
router.route('/employee/addEmployee').post(addEmployee);

// Update Employee =>
router.route('/employee/:id').put(updateEmployee);

// Remove Employee
router.route('/employee/:id').delete(removeEmployee);



module.exports = router;
