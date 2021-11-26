// export dışardan import edilebileceği anlamına geliyor.
export default  class UserService{

    add(){
        console.log("Kullanıcı eklendi.")
    }

    list(){
        console.log("Kullanıcılar listelendi.")
    }

    // getById : User ı id ye göre getirme.
    getById(id){
        console.log("Kullanıcı detayı getirildi.")
    }
}