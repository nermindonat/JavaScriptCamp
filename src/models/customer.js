import User from "./user.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, creditCardNumber){
        super(id, firstName, lastName, city, age) // super: User a verilen parametreler customerda da oldğuğ için onları tekrar yazmadan buraya getirmeye yarar.
        this.creditCardNumber=creditCardNumber
    }
}