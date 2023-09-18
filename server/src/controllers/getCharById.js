// ASYNC AWAIT ASYNC AWAIT ASYNC AWAIT ASYNC AWAIT
const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
  try{
    const {id} = req.params
    const response = await axios.get(`${URL}/${id}`);
    const data = response.data;

    if (data) {
      const { name, gender, species, origin = origin.name, image, status } = data;
      const character = { name, gender, species, origin, id, image, status };
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } 
  catch (error) {
    res.status(500).json({ message: "Error" });
  }
}

module.exports = {
  getCharById,
}






// PROMESAS PROMESAS PROMESAS PROMESAS PROMESAS PROMESAS
// const axios = require('axios')

// const URL = "https://rickandmortyapi.com/api/character"

// const getCharById = (req, res) => {
//   const {id} = req.params
//   axios.get(`${URL}/${id}`)
//   .then(({data}) => {
//     console.log(data)
//     if (data) {
//       const {name, gender, species, origin = origin.name, image, status } = data
//       const character = {name, gender, species, origin, id, image, status }
//       res.status(201).json(character) 
//     } else {
//       res.status(404).json({mesagge: "Not Found"}) 
//     }
//   })
//   .catch(error => {
//     res.status(500).json({message: "Error"})
//   })
// }

// module.exports = {
//   getCharById,
// }


// const axios = require('axios');

  //   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  //     .then(({data}) => {
//       const {name, gender, species, origin = origin.name, image, status} = data
//       const character = { name, gender, species, origin, id, image, status }

//       res.writeHead(200, {'Content-Type' : "Application/Json"})
//       res.end(JSON.stringify(character))
//     })

//     .catch((reason) => {
//       res.writeHead(500, {'Content-Type' : "text/plain"})
//       res.end(reason.message)
//     });
// };

// module.exports = {
//   getCharById,
// }