const Employee = require('../model/employeeModel');

// Add Employee => /api/v1/employee/Add

exports.addEmployee = async(req, res, next) => {

    const employee = await Employee.create(req.body);
    res.status(201).json({
        success: true,
        employee
    })
}

// Display Employee 
exports.getEmployee = async (req, res, next) => {

    const employee = await Employee.find();

    res.status(200).json({
        success: true,
        message: 'This route will show all employees in database.',
        count: employee.length,
        employee
    })
}

// Get single products  =>  /api/v1/employee/:id


exports.getSingleEmployee = async (req, res, next) =>{
    const employee = await Employee.findById(req.params.id);


    if(!employee){
        return res.status(404).json({
            success: false,
            message: 'Employee not found'
        })
    }

    res.status(200).json({
        success: true,
        employee
    })
}


// Update Employee Information => /api/v1/employee/:id

exports.updateEmployee = async(req, res, next) =>{

    let employee = await Employee.findById(req.params.id);

    if(!employee){
        return res.status(404).json({
            success: false,
            message: 'Employee not found'
        })
    }
    
    employee = await Employee.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        employee
    })
}

// Remove Employee => /api/v1/employee/:id

exports.removeEmployee = async(req, res, next) => {
    let employee = await Employee.findById(req.params.id);

    if(!employee){
        return res.status(404).json({
            success: false,
            message: 'Employee not found'
        })
    }

    await employee.remove();

    res.status(200).json({
        success: true,
        message: 'Employee is removed'
    })
}