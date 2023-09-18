let myFavorites = []

const postFav = (req, res) => {
    myFavorites.push(req.body) 
    res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params
    eliminados = myFavorites.filter(fav => fav.id != Number(id)) //(fav => fav.id !== Number(id))
    myFavorites = eliminados
    res.send(myFavorites)
}


module.exports = {
    postFav,
    deleteFav
}



// let myFavorites = [];

// const postFav = (req, res) => {
//     const character = req.body;
//     myFavorites.push(character);
//     return res.status(200).json(myFavorites);
// }

// const deleteFav = (req, res) => {
    // const { id } = req.params;
    // myFavorites = myFavorites.filter(favorite => favorite.id !== id); 

    // return res.status(200).json(myFavorites);
// }

// module.exports = {
//     postFav,
//     deleteFav,
// }
