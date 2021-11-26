import UserService from "../services/userService.js"  // services klasöründeki userService kullanacam. iki nokta da bulunduğum klasörün bi üstüne git demek

console.log("User component yüklendi")

let userService = new UserService

userService.add()
userService.getById(1)
userService.list()