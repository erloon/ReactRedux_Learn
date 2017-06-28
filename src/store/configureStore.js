import {createStore,applyMiddleware} from 'redux';
import rootReducer from './../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk,reduxImmutableStateInvariant())
    );
}