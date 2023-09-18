const server = require('./app')
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`)
})




// const express = require('express')
// const server = express()
// const PORT = 3001;
// const router = require('./routes/index')

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });

// server.use(express.json())
// server.use('/rickandmorty', router)

// server.listen(PORT, () => {
//   console.log(`Server raised in port: ${PORT}`)
// })





// *******************************************************************

// const http = require('http');
// const { getCharById } = require('./controllers/getCharById');

// const PORT = 3001;

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const { url } = req;

//     if (url.includes('/rickandmorty/character/')) { 
//         const id = Number(url.split('/').pop());

//         getCharById(res, id);

//     } else {
//         res.writeHead(400, { 'Content-type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Route not found.' }));
//     }

// }).listen(PORT, 'localhost', () => {
//     console.log(`Servidor corriendo en puerto ${PORT}`);
// });



// ***********************************************************
// const http = require('http');
// const data = require('./utils/data');
// const { error } = require('console');
// const PORT = 3001;

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const {url} = req

  
//     if(url === '/'){
//         res.writeHead(200, {'Content-type' : 'text/plain'})
//         res.end("Funciona")
//     }

//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop())
//         const character = data.find(char => char.id === id)

//         if(character){
//             res.writeHead(200, {'Content-type' : 'application/json'})
//             res.end(JSON.stringify(character))
//         } else{
//             res.writeHead(400, {'Content-type' : 'application/json'})
//             res.end(JSON.stringify({"error" :"Character not found."}))
//         }
        
//     }
// }).listen(PORT, "localhost", () => {
//     console.log(`Servidor corriendo en puerto ${PORT}`)
// })