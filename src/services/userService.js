import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
// export dışardan import edilebileceği anlamına geliyor.
export default  class UserService{
    constructor(loggerService){
        this.employees=[]
        this.customers=[]
        this.errors=[]
        this.loggerservice=loggerService
    }

    load(){
        for (const user of users) { // switch : İlgili verinin herhangi bir özelliğine göre
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)
                    }

                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
            }           
        }
    }
    // checkCustomerValidity: Müşteri doğruluğunu kontrol et
    checkCustomerValidityForErrors(user){
        let requiredFields="id firstName lastName age city".split(" ")
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }        
        }

        

        return hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields="id firstName lastName age city salary".split(" ")
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }        
        }
        return hasErrors
    }

    add(user){
        //this.users.push(user)
        this.loggerservice.log(user)
    }

    list(){
        //return this.users
    }

    // getById : User ı id ye göre getirme.
    getById(id){
        //return this.users.find(u=>u.id===id)
        
    }
}