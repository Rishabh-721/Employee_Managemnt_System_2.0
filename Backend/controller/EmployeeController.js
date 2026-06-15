import employee from "../model/EmployeeModel.js"

const createEmployee = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: `Server Error : ${error}`
        })
    }
}

const getEmployee = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: `Server Error : ${error}`
        })
    }
}

const getEmployeeById = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: `Server Error : ${error}`
        })
    }
}

const updateEmployee = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: `Server Error : ${error}`
        })
    }
}


const deleteEmployee = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: `Server Error : ${error}`
        })
    }
}

const getDeletedEmployee = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: `Server Error : ${error}`
        })
    }
}

export {createEmployee, getEmployee, getEmployeeById, updateEmployee,  deleteEmployee, getDeletedEmployee}