// const router = require('express').Router()

// router.get('/', (req, res) => {
//     res.send('hello world desde Router')
//   })
// const login = require('../controllers/login')
// const getCharById = require('../controllers/getCharById')
// const {deleteFav, postFav} = require('../controllers/handleFavorites')

// // http://localhost:3001/rickandmorty/character/5 ===> 
// // traer todos los personajes router.get('/character')
// router.get("/character/:id", getCharById)
// router.get("/login", login)
// router.post("/fav", postFav)
// router.delete("/fav/:id", deleteFav)



// module.exports = router;


const { login } = require('../controllers/login')
const { getCharById } = require('../controllers/getCharById')
const { postFav , deleteFav} = require('../controllers/HandleFavorites')

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req, res)
})

router.get('/login', (req, res) => {
    login(req, res)
})

router.post('/fav', (req, res) => {
    postFav(req, res);
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
})

module.exports = router;