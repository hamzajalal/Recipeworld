import authenticationReducer from './authenticationReducer';
import recipeReducer from './recipeReducer';
import { combineReducers } from 'redux';

const rootReducer= combineReducers({
    authentication: authenticationReducer,
    recipe: recipeReducer
});

export default rootReducer;