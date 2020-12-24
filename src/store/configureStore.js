import { createStore, combineReducers } from 'redux';
import gameboardReducer from '../reducers/gameboardReducer';

export default () => {
    const store =createStore(
        combineReducers({
            gameboard: gameboardReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}