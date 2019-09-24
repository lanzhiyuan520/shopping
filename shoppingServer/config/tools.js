const config = require('../config/config')

const imgAddHost = (path) => {
    return new Promise((resolve, reject)=>{
        resolve(`${config.imgHost}${path}`)
    })
}


module.exports = {
    imgAddHost
}
