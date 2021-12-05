import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"  // services klasöründeki userService kullanacam. iki nokta da bulunduğum klasörün bi üstüne git demek

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1= new User(1,"Nermin","Donat","Muğla");
let user2= new User(2,"Zana","Donat","Muğla");

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

let customer = {id:1, firstName:"Nermin"}

//prototyping : sonradan bir değer eklenebilir.
customer.lastName = "Donat"

console.log(customer.lastName)

console.log("-----------------")
userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)