import { combineReducers } from 'redux';
import imageReducer from './images';

const appReducer = combineReducers({
    images: imageReducer,
});

export default appReducer;
