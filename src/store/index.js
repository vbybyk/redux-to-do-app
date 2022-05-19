import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice';
// import heroes from '../reducers/heroes';
// import filters from '../reducers/filters';
import { configureStore } from '@reduxjs/toolkit';

const stringMiddleware = ({dispatch, getState}) => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
        type: action
    })
  } return dispatch(action)
}

// const store = createStore(
//                   combineReducers({heroes, filters}),
//                   compose(
//                     applyMiddleware(thunk, stringMiddleware),
//                     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//                   )
                  
                   
// );

// Redux Toolkit configureStore()
const store = configureStore({
  reducer: {heroes, filters},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;