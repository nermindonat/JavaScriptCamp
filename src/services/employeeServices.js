import UserService from "./userService";

export default class EmployeeService{
    constructor(){
        this.userService=new UserService
    }

    getAll() {
        return this.userService.employees
    }

    // getById : User ı id ye göre getirme.
    getEmployeeById(id) {
        return this.employees.filter(u=>u.id===id)

    }
}