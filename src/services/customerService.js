import UserService from "./userService";

export default class CustomerService{
    constructor(){
        this.userService=new UserService()
    }

    getAll() {
        return this.userService.customers
    }

    // getById : User ı id ye göre getirme.
    getCustomersById(id) {
        return this.customers.filter(u=>u.id===id)

    }

    getCustomersSorted(){ // Sıralama
        return this.userService.customers.sort((customer1,customer2)=>{
            if (customer1.firstName>customer2.firstName) {
                return 1;
            }
            else if (customer1.firstName===customer2.firstName) {
                return 0;               
            }
            else{
                return -1;
            }
        })

    }

}