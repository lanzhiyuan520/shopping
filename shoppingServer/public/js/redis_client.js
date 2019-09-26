var redis = require('redis')
let client = redis.createClient(6379,'localhost')
client.auth('lanzhiyuan1201',function(){
    console.log('通过认证')
})

let set = (key,value,time) => {
    return new Promise((resolve,reject)=>{
        client.set(key,value)
        if (time) {
            client.expire(key,time)
        }
        resolve(true)
    })
}

let get =key => {
    return new Promise((resolve,reject)=>{
        client.get(key,(err,result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

module.exports = {
    set,get
}