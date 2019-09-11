const mysql = require('mysql')

let conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'lanzhiyuan1201',
    prot : 3306,
    database : 'shopping',
    charset : 'UTF8MB4_GENERAL_CI'
})
conn.connect()

let sql = (sentence) => {
    return new Promise((resolve,reject)=>{
        conn.query(sentence,(err,result)=>{
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

module.exports = sql
