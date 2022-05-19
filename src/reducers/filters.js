const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
    // filteredHeroes: []
}

const filters = (state = initialState, action) => {
    switch (action.type) {
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
        default: return state
    }
}

export default filters;