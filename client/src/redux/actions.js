import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

// export const addFav =(payload) => {
//     return {
//         type:  ADD_FAV,
//         payload
//     }
// }

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try{
            const response = await axios.post(endpoint, character)
            const data = response.data

            dispatch({
                type: ADD_FAV,
                payload: data,
            });
        }
        catch(error){
            console.log(error)
        }
    };
};
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
// };

// export const removeFav =(id) => {
//     return {
//         type:  REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try{
            const response = await axios.delete(endpoint)
            const data = response.data

            return dispatch({
               type: REMOVE_FAV,
               payload: data,
            });
        }
        catch(error){
            console.log(error)
        }
    };
};
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//             });
//         });
//     };
// };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}