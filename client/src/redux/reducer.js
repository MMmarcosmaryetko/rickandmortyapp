import { ADD_FAV, REMOVE_FAV, ORDER, FILTER} from './action-types'

const initialState = {
    myFavorites: [],
    allFavorites: [],
    detail: {}
}
function rootReducer (state = initialState, action){
    switch(action.type){
         case ADD_FAV: 
            return {
                ...state, 
                myFavorites: action.payload, 
                allFavorites: action.payload };

        case REMOVE_FAV:
            return { ...state, 
                myFavorites: action.payload };

        case ORDER:
            const orderFavorites = [...state.myFavorites].sort((a, b) => {
                if (action.payload === "A") {
                    return a.id - b.id; 
                } else if (action.payload === "D") {
                    return b.id - a.id; 
                } else {
                    return 0;
                }
            });

            return {
                ...state,
                myFavorites: orderFavorites,
            }

        case FILTER:
            let favoriteFiltered = action.payload === "All" ? 
            state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: favoriteFiltered
            }

        default:
            return state
    }
}

export default rootReducer






// import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "./action-types"

// const initialState = {
//     myFavorites: [],
//     allCharacters: []
// }

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_FAV:
//             return { ...state, myFavorites: action.payload, allCharacters: action.payload };

//         case REMOVE_FAV:
//             return { ...state, myFavorites: action.payload };

//         case FILTER:
            // return {
            //     ...state,
            //     myFavorites: state.allCharacters.filter(char => char.gender === action.payload),
            // }

//         case ORDER:
            // const orderFavorites = [...state.myFavorites].sort((a, b) => {
            //     if (action.payload === "A") {
            //         return a.id - b.id; 
            //     } else if (action.payload === "D") {
            //         return b.id - a.id; 
            //     } else {
            //         return 0;
            //     }
            // });

            // return {
            //     ...state,
            //     myFavorites: orderFavorites,
            // }

//             default:
//                 return state;
//     }
// }

// export default rootReducer;