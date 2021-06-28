const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id:{
        type: Number,
        
    },
    name: {
        type: String,
        required: [true, 'Please enter employee name'],
        trim: true,
        maxLength: [55, 'Employee name cannot exceed 100 characters']
    },
    dob:{
        type : Date,
        require: [true, 'Please enter employee Date of Birth'],
        default: Date.now
    },
    gender: {
        type: String,
        required: [true, 'Please enter employee Gender'],
        maxLength: [2, 'Employee gender can not exceed 1 character']
    },
    salary:{
        type: Number,
        require: [true, 'Please enter employee Salary']
    }
})


module.exports = mongoose.model('Employee', employeeSchema);