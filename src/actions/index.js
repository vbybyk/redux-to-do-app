import { heroesFetching, heroesFetched, heroesFetchingError } from "../components/heroesList/heroesSlice";
import { filtersFetching, filtersFetched, filtersFetchingError } from "../components/heroesFilters/filtersSlice";

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
}

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }
// export const heroesDeletedId = (id) => {
//     return {
//         type: 'HEROES_DELETED',
//         payload: id
//     }
// }

// export const heroesAddNewItem = (values) => {
//     const newValues = {
//         ...values
//     }
//     console.log(newValues)
//     return {
//         type: 'NEW_HERO_ADDED',
//         payload: newValues
//     }
// }

// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }

// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }

// export const filtersActiveUpdate = (name) => {
//     return {
//         type: 'FILTER_ACTIVE_UPDATE',
//         payload: name
//     }
// }