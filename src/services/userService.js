// export dışardan import edilebileceği anlamına geliyor.
export default  class UserService{
    constructor(loggerService){
        this.users= []
        this.loggerservice=loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerservice.log(user)
    }

    list(){
        return this.users
    }

    // getById : User ı id ye göre getirme.
    getById(id){
        return this.users.find(u=>u.id===id)
        
    }
}