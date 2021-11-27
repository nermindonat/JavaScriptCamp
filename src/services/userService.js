// export dışardan import edilebileceği anlamına geliyor.
export default  class UserService{
    constructor(){
        this.users= []
    }

    add(user){
        this.users.push(user)
    }

    list(){
        return this.users
    }

    // getById : User ı id ye göre getirme.
    getById(id){
        return this.users.find(u=>u.id===id)
        
    }
}