const users = require("../utils/users")

const login = (req, res) => {
    const {email, password} = req.query;
    const user = users.find(user => user.email === email && user.password === password);

    if(user){
        res.status(200).json({access: true})
    } else {
        res.status(400).json({access: false})
    }
}


module.exports = {
    login,
}

// const users = require('../utils/users')

// const login = (req, res) => {
// const {email, password} = req.query
// let access = false

// users.forEach(user => {
//     if( user.email === email && user.password === password){
//         access = true
//     }
// })
// res.json({access})
// }
// // ? Donde vemos el error en Front? Punto a corregir

// module.exports = login;