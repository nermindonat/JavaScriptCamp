import User from "../models/user.js"
import UserService from "../services/userService.js"  // services klasöründeki userService kullanacam. iki nokta da bulunduğum klasörün bi üstüne git demek

console.log("User component yüklendi")

let userService = new UserService()

let user1= new User(1,"Nermin","Donat","Muğla");

userService.add(user1.firstName)


userService.getById(1)
userService.list()


let customer = {id:1, firstName:"Nermin"}

//prototyping : sonradan bir değer eklenebilir.
customer.lastName = "Donat"

console.log(customer.lastName)