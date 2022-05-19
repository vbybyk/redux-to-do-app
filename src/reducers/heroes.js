const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
                // filteredHeroes: state.activeFilter === 'all' ? 
                //                 action.payload : 
                //                 action.payload.filter(item => item.element === state.activeFilter),
                
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(elem => elem.id !== action.payload)
            //     filteredHeroes: state.activeFilter === 'all' ? 
            //                     decArray : 
            //                     decArray.filter(elem => elem.element === state.activeFilter)
            }
        case 'NEW_HERO_ADDED':
            // const incArray = [...state.heroes, action.payload]; 
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
                // filteredHeroes: state.activeFilter === 'all' ? 
                //                 incArray : 
                //                 incArray.filter(elem => elem.element === state.activeFilter)
               
            }
        default: return state
    }
}

export default heroes;