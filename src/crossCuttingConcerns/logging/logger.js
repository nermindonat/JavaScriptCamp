export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)        
    }
}

export class ElasticLogger extends BaseLogger{ // extend: ElasticLogger bir BaseLogger dır. Yani inherite ettik.
    log(data){
        console.log("Logged to Elastic" + data)
            
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
            
    }
}

