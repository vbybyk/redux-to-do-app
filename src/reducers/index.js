const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
    // filteredHeroes: []
}

const reducer = (state = initialState, action) => {
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
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTER_ACTIVE_UPDATE':
            // const filteredArray = action.payload === 'all' ? 
            //                     state.heroes : 
            //                     state.heroes.filter(elem => elem.element === action.payload)
            return {
                ...state,
                // filteredHeroes: filteredArray,
                activeFilter: action.payload
            }
        case 'HEROES_DELETED':
            const decArray = state.heroes.filter(elem => elem.id !== action.payload)
            // const decFilteredArray = state.filteredHeroes.filter(elem => elem.id !== action.payload)
            return {
                ...state,
                heroes: decArray,
                filteredHeroes: state.activeFilter === 'all' ? 
                                decArray : 
                                decArray.filter(elem => elem.element === state.activeFilter)
            }
        case 'NEW_HERO_ADDED':
            const incArray = [...state.heroes, action.payload];
            // const incFilteredArray = (state.activeFilter === action.payload.element)? 
            //                             [...state.filteredHeroes, action.payload] :
            //                             [...state.filteredHeroes];           
            return {
                ...state,
                heroes: incArray,
                filteredHeroes: state.activeFilter === 'all' ? 
                                incArray : 
                                incArray.filter(elem => elem.element === state.activeFilter)
               
            }
        default: return state
    }
}

export default reducer;