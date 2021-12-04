import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary){
        super(id, firstName, lastName, city, age) // super: User a verilen parametreler customerda da oldğuğ için onları tekrar yazmadan buraya getirmeye yarar.
        this.salary=salary
    }
}